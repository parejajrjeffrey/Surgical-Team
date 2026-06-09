#!/usr/bin/env node
/**
 * cst — Cline Surgical Team CLI
 * 
 * Installs AI doctor personas into any AI coding assistant platform.
 * 7 Doctors. 225 Rules. 6 Engineering Domains. One Team.
 * 
 * Usage:
 *   cst init --ai <platform>          Install full surgical team
 *   cst init --ai <platform> --team backend-qa  Install specific team composition
 *   cst init --ai <platform> --doctor dr-backend   Install a single doctor
 *   cst doctors                       List all available doctors
 *   cst team                          Show team roster
 *   cst update                        Update to latest version
 *   cst uninstall --ai <platform>     Remove all doctors
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ─── TEAM ROSTER ──────────────────────────────────────────────────
const DOCTORS = {
  'dr-orchestrator': {
    emoji: '🏥', name: 'Dr. Orchestrator',
    domain: 'Master Surgical Team Director',
    rules: 225, pipeline: 'N/A', checks: 0,
    description: 'Chief of Surgery — triages requests and dispatches the right specialist doctor'
  },
  'dr-backend': {
    emoji: '🧬', name: 'Dr. Backend',
    domain: 'Backend & API Engineering',
    rules: 41, pipeline: '7-stage', checks: 23,
    description: 'API design, database architecture, auth, caching, message queues, resilience patterns'
  },
  'dr-devops': {
    emoji: '🔧', name: 'Dr. DevOps',
    domain: 'DevOps & Infrastructure',
    rules: 39, pipeline: '7-stage', checks: 22,
    description: 'IaC, Kubernetes, CI/CD pipelines, observability, secrets management, disaster recovery'
  },
  'dr-qa': {
    emoji: '🧪', name: 'Dr. QA',
    domain: 'QA & Testing Engineering',
    rules: 36, pipeline: '6-stage', checks: 22,
    description: 'E2E, API contract, performance, integration, security, and accessibility testing'
  },
  'dr-frontend': {
    emoji: '🎨', name: 'Dr. Frontend',
    domain: 'Frontend UI/UX Engineering',
    rules: 38, pipeline: '7-stage', checks: 23,
    description: 'Components, design tokens, WCAG 2.2 AA, Core Web Vitals, state management, animation'
  },
  'dr-security': {
    emoji: '🔐', name: 'Dr. Security',
    domain: 'Security & Compliance Engineering',
    rules: 37, pipeline: '6-stage', checks: 23,
    description: 'AppSec, cloud security, IAM, data privacy, compliance (SOC2, ISO27001, PCI DSS), incident response'
  },
  'dr-data': {
    emoji: '📊', name: 'Dr. Data',
    domain: 'Data Engineering & Analytics',
    rules: 34, pipeline: '6-stage', checks: 20,
    description: 'dbt, Airflow, Spark, Snowflake, BigQuery, ClickHouse, data quality, governance, analytics'
  }
};

const ALL_DOCTORS = Object.keys(DOCTORS);

// Pre-built team compositions
const TEAMS = {
  'full-stack': ['dr-orchestrator', 'dr-backend', 'dr-frontend', 'dr-devops', 'dr-qa'],
  'backend-qa': ['dr-backend', 'dr-qa', 'dr-orchestrator'],
  'infra-security': ['dr-devops', 'dr-security', 'dr-orchestrator'],
  'data-ml': ['dr-data', 'dr-backend', 'dr-orchestrator'],
  'frontend-full': ['dr-frontend', 'dr-qa', 'dr-orchestrator'],
  'audit-only': ['dr-security', 'dr-qa', 'dr-orchestrator'],
  'sre': ['dr-devops', 'dr-backend', 'dr-security', 'dr-orchestrator'],
  'mobile': ['dr-frontend', 'dr-backend', 'dr-qa', 'dr-orchestrator'],
};

// Platform → skills directory mapping
const PLATFORMS = {
  claude: { dir: '.claude/skills', label: 'Claude Code / Cline' },
  cline: { dir: '.cline/skills', label: 'Cline (VS Code)' },
  cursor: { dir: '.cursor/skills', label: 'Cursor' },
  windsurf: { dir: '.windsurf/skills', label: 'Windsurf' },
  continue: { dir: '.continue/skills', label: 'Continue' },
  codebuddy: { dir: '.codebuddy/skills', label: 'CodeBuddy' },
  factory: { dir: '.factory/skills', label: 'Droid (Factory)' },
  augment: { dir: '.augment/skills', label: 'Augment' },
  antigravity: { dir: '.antigravity/skills', label: 'Antigravity' },
  warp: { dir: '.warp/skills', label: 'Warp' },
  qoder: { dir: '.qoder/skills', label: 'Qoder' },
  opencode: { dir: '.opencode/skills', label: 'OpenCode' },
  copilot: { dir: '.github/skills', label: 'GitHub Copilot' },
  roocode: { dir: '.roocode/skills', label: 'Roo Code' },
  kilocode: { dir: '.kilocode/skills', label: 'KiloCode' },
  gemini: { dir: '.gemini/skills', label: 'Gemini CLI' },
  trae: { dir: '.trae/skills', label: 'Trae' },
  codex: { dir: '.codex/skills', label: 'Codex CLI' },
};

// ─── HELPERS ──────────────────────────────────────────────────────
function getSkillSourceDir() {
  // In development: CLI is in cli/, source doctors are in ../.cline/skills/
  // After npm install: source is bundled in assets/
  const devPath = path.resolve(__dirname, '..', '.cline', 'skills');
  const npmPath = path.resolve(__dirname, 'assets', 'skills');
  if (fs.existsSync(devPath)) return devPath;
  if (fs.existsSync(npmPath)) return npmPath;
  return null;
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function getTargetDir(platform, globalMode) {
  const info = PLATFORMS[platform];
  if (!info) return null;
  if (globalMode) {
    const home = process.env.HOME || process.env.USERPROFILE || '~';
    return path.join(home, info.dir);
  }
  return path.join(process.cwd(), info.dir);
}

// ─── COMMANDS ─────────────────────────────────────────────────────
function cmdDoctors() {
  console.log('\n🏥 The Cline Surgical Team — On-Call Roster\n');
  console.log('─'.repeat(78));
  ALL_DOCTORS.forEach(id => {
    const d = DOCTORS[id];
    console.log(`  ${d.emoji}  ${d.name.padEnd(22)} ${d.rules.toString().padStart(3)} rules  ${d.pipeline} pipeline  ${d.checks.toString().padStart(2)} checks`);
    console.log(`      ${d.description}`);
    console.log();
  });
  console.log('─'.repeat(78));
  console.log(`  Total: ${ALL_DOCTORS.length} Doctors | ${Object.values(DOCTORS).reduce((s,d)=>s+d.rules,0)-225+225} Rules | 6 Domains\n`);
  console.log('Pre-built teams:');
  Object.entries(TEAMS).forEach(([name, members]) => {
    console.log(`  cst init --team ${name}  → ${members.map(m => DOCTORS[m].emoji).join(' ')} ${members.map(m => DOCTORS[m].name).join(', ')}`);
  });
  console.log();
}

function cmdTeam() {
  console.log('\n🏥 Surgical Team Roster\n');
  console.log('┌─────┬──────────────────────────┬──────────┬───────┬──────────┬────────┐');
  console.log('│  #  │ Doctor                   │ Domain   │ Rules │ Pipeline │ Checks │');
  console.log('├─────┼──────────────────────────┼──────────┼───────┼──────────┼────────┤');
  ALL_DOCTORS.forEach((id, i) => {
    const d = DOCTORS[id];
    console.log(`│  ${d.emoji}  │ ${d.name.padEnd(24)} │ ${d.domain.substring(0,8).padEnd(8)} │ ${d.rules.toString().padStart(5)} │ ${d.pipeline.padEnd(8)} │ ${d.checks.toString().padStart(6)} │`);
  });
  console.log('└─────┴──────────────────────────┴──────────┴───────┴──────────┴────────┘');
  console.log(`\n  7 Doctors | 225 rules | 39 pipeline stages | 133 quality checks\n`);
}

function cmdInit(platform, options) {
  if (!platform || !PLATFORMS[platform]) {
    console.error(`\n❌ Unknown platform: ${platform}\n`);
    console.log('Supported platforms:');
    Object.entries(PLATFORMS).forEach(([k, v]) => console.log(`  ${k.padEnd(12)} → ${v.label}`));
    console.log('\nUsage: cst init --ai <platform> [--team <name>] [--doctor <id>] [--global]\n');
    process.exit(1);
  }

  const sourceDir = getSkillSourceDir();
  if (!sourceDir) {
    console.error('❌ Could not find skill source files. Make sure you\'re running from the project root or the npm package is properly installed.');
    process.exit(1);
  }

  let doctorsToInstall = [];
  if (options.doctor) {
    if (!DOCTORS[options.doctor]) {
      console.error(`\n❌ Unknown doctor: ${options.doctor}. Use "cst doctors" to see available specialists.\n`);
      process.exit(1);
    }
    doctorsToInstall = [options.doctor];
    // Auto-include orchestrator for single-doctor installs if not already the orchestrator itself
    if (options.doctor !== 'dr-orchestrator') {
      doctorsToInstall.push('dr-orchestrator');
    }
  } else if (options.team) {
    if (!TEAMS[options.team]) {
      console.error(`\n❌ Unknown team: ${options.team}. Use "cst doctors" to see available teams.\n`);
      process.exit(1);
    }
    doctorsToInstall = TEAMS[options.team];
  } else {
    doctorsToInstall = ALL_DOCTORS;
  }

  const targetDir = getTargetDir(platform, options.global);
  const info = PLATFORMS[platform];

  // Banner
  console.log(`
╔══════════════════════════════════════════════════════════════════════════════╗
║                    🏥  CLINE SURGICAL TEAM  v2.4.1                          ║
║                    Installing for ${info.label.padEnd(37)}║
╚══════════════════════════════════════════════════════════════════════════════╝
`);
  console.log(`Target: ${targetDir}`);
  console.log(`Mode: ${options.global ? 'Global (all projects)' : 'Local (this project)'}`);

  if (options.team) {
    console.log(`Team: ${options.team} (${doctorsToInstall.length} doctors)`);
  } else if (options.doctor) {
    console.log(`Doctor: ${options.doctor} + Orchestrator`);
  } else {
    console.log(`Team: Full surgical team (${doctorsToInstall.length} doctors)`);
  }

  console.log(`\n📋 Paging specialists...\n`);

  let installed = 0;
  doctorsToInstall.forEach(id => {
    const d = DOCTORS[id];
    const src = path.join(sourceDir, id);
    const dest = path.join(targetDir, id);

    if (!fs.existsSync(src)) {
      console.log(`  ⚠️  ${d.emoji} ${d.name} — source files not found, skipping`);
      return;
    }

    const filesBefore = fs.existsSync(dest) ? fs.readdirSync(dest).length : 0;
    copyDir(src, dest);
    const filesAfter = fs.existsSync(dest) ? fs.readdirSync(dest).length : 0;

    console.log(`  ✅ ${d.emoji} ${d.name.padEnd(22)} ${d.rules} rules  ${d.pipeline} pipeline  ${filesAfter} files installed`);
    installed++;
  });

  // Copy the root skill.json manifest for platform discovery
  const rootManifestSrc = path.resolve(__dirname, '..', 'skill.json');
  const rootManifestDest = path.join(targetDir, '..', 'skill.json');
  if (fs.existsSync(rootManifestSrc)) {
    fs.copyFileSync(rootManifestSrc, rootManifestDest);
    console.log(`  📋 Team manifest installed`);
  }

  console.log(`\n${'─'.repeat(78)}`);
  console.log(`✅  Surgical team ready! ${installed} specialists paged to ${info.label}.`);
  console.log(`\n  Page any specialist: use_skill("dr-backend")`);
  console.log(`  Or just say: "Dr. Backend, audit my API"`);
  console.log(`\n  Run "cst doctors" to see the full roster.\n`);
}

function cmdUninstall(platform, globalMode) {
  if (!platform || !PLATFORMS[platform]) {
    console.error(`\n❌ Unknown platform. Use: cst uninstall --ai <platform>\n`);
    process.exit(1);
  }

  const targetDir = getTargetDir(platform, globalMode);
  const info = PLATFORMS[platform];

  if (!fs.existsSync(targetDir)) {
    console.log(`\n⚠️  No skills found for ${info.label} at ${targetDir}\n`);
    process.exit(0);
  }

  console.log(`\n🧹 Removing surgical team from ${info.label}...\n`);

  let removed = 0;
  ALL_DOCTORS.forEach(id => {
    const dir = path.join(targetDir, id);
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`  ❌ ${DOCTORS[id].emoji} ${DOCTORS[id].name} — discharged`);
      removed++;
    }
  });

  // Clean up empty skills dir and manifest
  const skillsDir = targetDir;
  const manifestFile = path.join(targetDir, '..', 'skill.json');
  try {
    const remaining = fs.readdirSync(skillsDir).filter(f => f !== '.' && f !== '..');
    if (remaining.length === 0) fs.rmdirSync(skillsDir);
  } catch (e) {}
  if (fs.existsSync(manifestFile)) fs.unlinkSync(manifestFile);

  console.log(`\n✅  ${removed} doctors discharged from ${info.label}.\n`);
}

// ─── MAIN ─────────────────────────────────────────────────────────
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  console.log(`
🏥  CST — Cline Surgical Team CLI  v2.4.1

  7 AI engineering specialists. 225 prescriptive rules. 6 domains.
  Install into any AI coding assistant.

COMMANDS:
  cst init --ai <platform>              Install full surgical team
  cst init --ai <platform> --team <t>   Install a pre-built team composition
  cst init --ai <platform> --doctor <d> Install a single specialist
  cst init --ai <platform> --global     Install globally (all projects)
  cst doctors                           List all available specialists
  cst team                              Show team roster with stats
  cst update                            Update to latest version
  cst uninstall --ai <platform>         Remove all doctors

TEAM COMPOSITIONS:
  full-stack       Backend + Frontend + DevOps + QA + Orchestrator
  backend-qa       Backend + QA + Orchestrator
  infra-security   DevOps + Security + Orchestrator
  data-ml          Data + Backend + Orchestrator
  frontend-full    Frontend + QA + Orchestrator
  audit-only       Security + QA + Orchestrator
  sre              DevOps + Backend + Security + Orchestrator
  mobile           Frontend + Backend + QA + Orchestrator

SINGLE DOCTORS:
  cst init --ai <platform> --doctor dr-backend     API & Database specialist
  cst init --ai <platform> --doctor dr-devops      Infrastructure specialist
  cst init --ai <platform> --doctor dr-qa          Testing gatekeeper
  cst init --ai <platform> --doctor dr-frontend    UI/UX specialist
  cst init --ai <platform> --doctor dr-security    Threat defender
  cst init --ai <platform> --doctor dr-data        Data pipeline architect

SUPPORTED PLATFORMS:
  cline, claude, cursor, windsurf, copilot, codex, qoder, roocode,
  gemini, trae, opencode, continue, codebuddy, droid (factory),
  kilocode, warp, augment, antigravity

EXAMPLES:
  cst init --ai cline                       Full team for Cline
  cst init --ai cursor --team backend-qa    Backend + QA for Cursor
  cst init --ai claude --doctor dr-security Security specialist for Claude
  cst init --ai all --global                Install everywhere globally
`);
  process.exit(0);
}

// Parse command
const command = args[0];
const aiIndex = args.indexOf('--ai');
const teamIndex = args.indexOf('--team');
const doctorIndex = args.indexOf('--doctor');
const globalFlag = args.includes('--global');

const platform = aiIndex !== -1 ? args[aiIndex + 1] : null;

switch (command) {
  case 'doctors':
    cmdDoctors();
    break;
  case 'team':
    cmdTeam();
    break;
  case 'init':
    if (platform === 'all') {
      // Install to every known platform
      Object.keys(PLATFORMS).forEach(p => {
        cmdInit(p, { team: teamIndex !== -1 ? args[teamIndex + 1] : null, doctor: doctorIndex !== -1 ? args[doctorIndex + 1] : null, global: globalFlag });
      });
    } else {
      cmdInit(platform, { team: teamIndex !== -1 ? args[teamIndex + 1] : null, doctor: doctorIndex !== -1 ? args[doctorIndex + 1] : null, global: globalFlag });
    }
    break;
  case 'uninstall':
    cmdUninstall(platform, globalFlag);
    break;
  case 'update':
    console.log('\n🔄 Updating surgical team to latest version...');
    try {
      execSync('npm install -g cline-surgical-team@latest', { stdio: 'inherit' });
      console.log('✅ Surgical team updated. Run "cst doctors" to verify.\n');
    } catch (e) {
      console.log('⚠️  Update failed. Try: npm install -g cline-surgical-team@latest\n');
    }
    break;
  default:
    console.log(`\n❌ Unknown command: ${command}. Use "cst --help" to see available commands.\n`);
    process.exit(1);
}