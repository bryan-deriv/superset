import { useMDXComponents as getBlogMDXComponents } from "nextra-theme-blog";
import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";

export function useMDXComponents(components = {}) {
	// Merge both theme components to support both /docs and /blog routes
	return {
		...getDocsMDXComponents(components),
		...getBlogMDXComponents(components),
	};
}
