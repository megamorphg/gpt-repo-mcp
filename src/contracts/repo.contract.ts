import { z } from "zod";

export const RepoInputSchema = z.object({
  repo_id: z.string().min(1).describe("Stable approved repository id from repo_list_roots.")
});

export const RepoTreeInputSchema = RepoInputSchema.extend({
  path: z.string().optional(),
  max_depth: z.number().int().positive().optional(),
  page_size: z.number().int().positive().optional(),
  include_files: z.boolean().optional(),
  respect_default_excludes: z.boolean().optional(),
  include_generated: z.boolean().optional(),
  include_dependencies: z.boolean().optional(),
  cursor: z.string().optional().describe("Opaque cursor returned by a previous repo_tree call with the same path and filters.")
});

export const RepoSummarySchema = z.object({
  repo_id: z.string(),
  display_name: z.string(),
  root: z.string()
});

export const RepoRuntimeInfoSchema = z.object({
  implementation: z.literal("gpt-repo-mcp"),
  version: z.string().min(1),
  platform: z.string().min(1),
  capability_schema_version: z.number().int().positive(),
  features: z.object({
    literal_exact_replacements: z.boolean(),
    newline_metadata: z.boolean(),
    structured_write_failure_diagnostics: z.boolean(),
    transient_windows_atomic_rename_retry: z.boolean(),
    windows_validation_command_shim: z.boolean()
  })
});

export const RepoListResultSchema = z.object({
  repos: z.array(RepoSummarySchema),
  runtime: RepoRuntimeInfoSchema
});
