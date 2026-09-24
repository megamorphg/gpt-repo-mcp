import packageJson from "../../package.json" with { type: "json" };

export const GPT_REPO_RUNTIME_INFO = {
  implementation: "gpt-repo-mcp",
  version: packageJson.version,
  platform: process.platform,
  capability_schema_version: 1,
  features: {
    literal_exact_replacements: true,
    newline_metadata: true,
    structured_write_failure_diagnostics: true,
    transient_windows_atomic_rename_retry: true,
    windows_validation_command_shim: true
  }
} as const;
