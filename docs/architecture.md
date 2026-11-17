# Alongio — Project Architecture

## 1. Overview

Alongio is a mobile application built with React Native, Expo, and TypeScript.

This document defines the project's architecture, folder responsibilities, data flow, and coding conventions.

The purpose of this document is to ensure consistency across the codebase and guide the AI Engineering Mentor when reviewing code or recommending solutions.

**Core Principle:** Follow the existing project architecture before suggesting new patterns, abstractions, or folder structures.

---

## 2. Technology Stack

- **Framework:** React Native with Expo
- **Language:** TypeScript
- **HTTP Client:** Axios
- **Server State Management:** TanStack React Query
- **UI State Management:** TanStack React Store

Other libraries and implementation patterns must be identified from the existing repository rather than assumed.

---

## 3. Source Folder Structure

The application source code is organized into nine primary directories:

```text
src/
├── components/
│   ├── shared/
│   └── custom/
├── controllers/
├── hooks/
├── interfaces/
├── lib/
├── pages/
│   ├── app/
│   └── auth/
├── routes/
├── services/
└── stores/
```

### 3.1. components/

Contains React Native UI components.

**shared/**

- Reusable components shared across multiple pages.
- Designed to provide consistency throughout the application.
- Prefer existing shared components before creating new ones.

**custom/**

- Page-specific components.
- Used to break down complex pages into smaller, readable components.
- Help prevent page files from becoming excessively long.
- Not necessarily intended for reuse across unrelated pages.

**Rules:**

- Keep components focused on presentation and interaction.
- Do not place API request implementations directly inside components.
- Reuse existing components when appropriate.

### 3.2. controllers/

Contains feature-specific hooks responsible for managing backend data through TanStack React Query.

**Responsibilities:**

- Define and manage `useQuery` hooks.
- Define and manage `useMutation` hooks.
- Call functions provided by the services layer.
- Transform or map fetched data when necessary.
- Expose query results, mutation functions, and relevant states to consuming pages or components.

**Rules:**

- Controllers are the primary integration layer between UI and API services.
- API requests must be delegated to services.
- When fetched data requires mapping or transformation for UI consumption, perform it within the controller layer.
- Follow the existing controller and hook patterns.

### 3.3. hooks/

Contains custom React hooks.

The exact scope and separation between general-purpose hooks and controller hooks should follow existing implementations.

Before recommending a new hook, inspect the existing `hooks/` and `controllers/` directories to determine its appropriate location.

### 3.4. interfaces/

Centralizes TypeScript type definitions and interfaces to prevent types from being scattered across the codebase.

**Responsibilities:**

- Store page-specific type definitions.
- Store API request DTOs.
- Store API response DTOs.
- Provide shared types where necessary.

**Naming Conventions:**

- Page-specific interfaces use the `pageInterface.ts` naming pattern, following the convention of the existing page files.
- API DTO naming conventions should follow existing implementations.

**Rules:**

- Reuse existing interfaces and DTOs when possible.
- Avoid duplicating equivalent type definitions.
- Keep API data contracts explicit and consistent.

### 3.5. lib/

Contains helper functions and utilities.

**Responsibilities:**

- Provide helper functions used throughout the application.
- Centralize common utility logic.

**Rules:**

- Reuse existing helpers before creating new ones.
- Avoid duplicating utility functions across features.
- Inspect existing helper patterns before suggesting additional abstractions.

### 3.6. pages/

Contains application screens.

**app/**

- Main application pages.
- Screens related to the application's primary features.

**auth/**

- Authentication-related pages.
- Examples include login and registration screens.

**Responsibilities:**

- Render screens and UI components.
- Handle user interactions.
- Consume controller hooks for backend-related data.
- Compose shared and custom components.

**Rules:**

- Keep page files readable and maintainable.
- Extract complex, page-specific UI into `components/custom/` when appropriate.
- Avoid implementing Axios requests directly inside page files.
- Use the controller layer for React Query operations.

### 3.7. routes/

Contains application routing-related files.

Specific routing conventions, navigation structure, and responsibilities must be determined from existing implementations.

Do not introduce new routing patterns without inspecting the current project.

### 3.8. services/

Contains functions responsible for communicating with backend APIs.

**Responsibilities:**

- Perform HTTP requests using Axios.
- Define API communication functions.
- Handle request and response operations at the HTTP layer.

**Rules:**

- Keep API communication separate from UI logic.
- Do not place TanStack React Query hooks inside services.
- Reuse the existing Axios setup when available.
- Use the defined API request and response DTOs.

### 3.9. stores/

Contains state management for UI-related requirements using TanStack React Store.

**Responsibilities:**

- Manage UI state that needs to be shared or persisted across relevant components during application execution.
- Provide state access through established store patterns.

**Rules:**

- Use TanStack React Store for appropriate UI state.
- Use TanStack React Query for server state.
- Avoid duplicating React Query server data unnecessarily in UI stores.
- Follow existing store conventions.

---

## 4. Data Flow

### 4.1. Fetching Backend Data

The standard backend data flow is:

```text
Page / Screen
     ↓
Controller (useQuery)
     ↓
Service (Axios)
     ↓
Backend API
     ↓
Service Response
     ↓
Controller (Data Mapping if needed)
     ↓
Page / Screen
     ↓
UI Rendering
```

**Important:** Data mapping required for UI consumption belongs in the controller layer.

### 4.2. Mutating Backend Data

The standard mutation flow is:

```text
User Interaction
     ↓
Page / Screen
     ↓
Controller (useMutation)
     ↓
Service (Axios)
     ↓
Backend API
     ↓
Mutation Result
     ↓
Controller
     ↓
UI Update
```

Mutation success handling, query invalidation, and error handling should follow established patterns found in the repository.

### 4.3. UI State Management

Use TanStack React Store for application UI state where shared state management is appropriate.

Do not confuse UI state with server state managed through TanStack React Query.

---

## 5. Coding Conventions

### Separation of Concerns

- Pages are responsible for screen composition and user interaction.
- Controllers handle React Query operations and fetched-data mapping.
- Services handle Axios-based API communication.
- Stores handle appropriate UI state.
- Interfaces centralize type definitions and DTOs.
- Components provide reusable or page-specific UI building blocks.
- Lib contains helpers and utilities.

### Reusability

- Inspect existing components before recommending new components.
- Prefer existing helpers and utilities.
- Avoid unnecessary abstraction.
- Keep page-specific UI components separate when doing so improves readability.

### Consistency

- Follow existing file naming conventions.
- Follow existing TypeScript patterns.
- Follow existing dependency and import conventions.
- Do not introduce new architectural layers without a clear reason.

---

## 6. AI Engineering Mentor Instructions

Before proposing an implementation:

1. Read this architecture document.
2. Inspect the relevant folder structure.
3. Find an existing feature with similar responsibilities.
4. Analyze how the feature uses pages, controllers, and services.
5. Inspect relevant interfaces, stores, and components.
6. Recommend a solution consistent with existing patterns.

When recommending an implementation:

- Explain which files or layers are involved.
- Explain the responsibilities of each layer.
- Reference relevant existing implementations.
- Do not invent folder conventions that do not exist.
- Do not modify application source code.
- Provide code examples only when explicitly requested.

### Architectural Feedback

The existing architecture is the preferred starting point, not an unquestionable rule.

If an existing pattern introduces technical risks or unnecessary complexity:

1. Explain the issue.
2. Describe the trade-offs.
3. Recommend an improvement.
4. Do not change the architecture without explicit approval.

### Unknown Conventions

If a project's implementation details are not documented here, inspect the repository before making recommendations.

Never invent conventions, naming patterns, or responsibilities without supporting evidence.

---

## 7. Documentation Maintenance

This document should evolve alongside the application.

When significant architectural changes occur:

- Identify differences between this document and the implementation.
- Explain whether documentation updates are necessary.
- Recommend updates for developer review.
- Do not automatically rewrite this document.

The developer remains responsible for approving architectural decisions.

## Dependency Awareness

Before recommending any implementation:

1. Read `package.json` to identify installed dependencies.
2. Check the existing implementation of relevant libraries.
3. Prefer installed packages over introducing new ones.
4. Do not recommend installing a new package if an
   existing dependency can reasonably solve the problem.
5. Check compatibility with the current Expo SDK.
6. Explain trade-offs before recommending new dependencies.
7. Never install, remove, or upgrade packages automatically.

The project's `package.json` is the source of truth
for declared dependencies.

Do not maintain a duplicate list of all installed
packages in this document.
