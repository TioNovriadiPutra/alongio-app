# Alongio — MVP v1

**Version:** 1.0
**Status:** In Development
**Platform:** Android & iOS
**Framework:** React Native with Expo
**Business Model:** Free
**Project Type:** Personal Side Project

---

## 1. Product Vision

Alongio is a playful lifestyle and household management application designed for individuals and couples.

Its purpose is to make everyday life more organized, enjoyable, and meaningful through simple productivity tools, shared activities, and AI-powered experiences.

Alongio should feel like a friendly daily companion rather than a traditional productivity application.

**Product Philosophy:**

_Your day. Your way. Better together._

## 2. Target Users

### Personal Users

Individuals who want to organize everyday activities, discover meal ideas, and record personal moments.

### Couples

Partners who want to manage daily responsibilities, plan activities, and create meaningful moments together.

### Core Principle

Alongio must remain useful without a connected partner.

Users can start in Personal Mode and optionally connect with their partner to access shared experiences.

---

## 3. MVP Goals

The first MVP aims to:

- Deliver a functional Android and iOS application.
- Validate the Personal + Couple experience.
- Provide practical everyday features with playful interactions.
- Introduce AI-powered recipe recommendations.
- Gather feedback from early users.
- Learn the complete mobile development and publishing process.

### Non-Goals

The first MVP does not prioritize:

- Monetization or subscriptions.
- Complex gamification.
- Real-time multiplayer games.
- Advanced financial management.
- General-purpose AI chat.
- Large-scale social networking.
- Complex productivity automation.

---

## 4. MVP Features

### 4.1. Authentication & Profile

**Priority:** Must Have

Users can:

- Register and log in.
- Maintain authenticated sessions.
- Log out.
- Manage basic profile information.

Authentication implementation should follow the existing project architecture.

### 4.2. Personal & Couple Space

**Priority:** Must Have

Users can:

- Use Alongio independently in Personal Mode.
- Invite a partner using a unique invitation code or link.
- Accept an invitation to connect accounts.
- Switch between Personal and Couple spaces.
- Access shared data within Couple Space.

**MVP Limitations:**

- Maximum two users per Couple Space.
- No group or family spaces.
- No advanced relationship customization.

Personal data must remain separate from shared data. Partner disconnection and access removal must be handled safely.

### 4.3. Home

**Priority:** Must Have

The Home screen serves as Alongio's main navigation hub.

Includes:

- Personalized greeting.
- Personal/Couple space selector.
- Feature navigation cards.
- Today's Moment.
- Simple daily prompts or nudges.
- Bottom navigation.

**MVP Limitations:**

- No complex dashboard analytics.
- No advanced personalization engine.
- Inactive features may display Coming Soon.

### 4.4. Little Kitchen

**Priority:** Must Have

AI-powered meal and recipe recommendations.

Users can:

- Enter available ingredients.
- Select basic preferences such as meal type.
- Request recipe recommendations.
- View ingredients and preparation steps.
- View estimated cooking time.

**MVP Limitations:**

- Text-based ingredient input.
- Text-based AI responses.
- No image recognition.
- No automatic grocery ordering.
- No advanced weekly meal planning.
- No AI-generated cooking videos.

**AI Requirements:**

- AI requests must be processed through a backend.
- Never expose API credentials in the mobile application.
- Apply reasonable per-user usage limits.
- Handle unavailable AI services gracefully.
- Display basic food safety guidance when relevant.

### 4.5. Tiny Planner

**Priority:** Must Have

A lightweight daily task and activity planner.

Users can:

- Create tasks.
- Edit and delete tasks.
- Set optional due dates.
- Mark tasks as completed.
- View personal tasks.
- Create shared tasks in Couple Space.
- Assign shared tasks to either partner.

**MVP Limitations:**

- No recurring tasks.
- No complex calendar synchronization.
- No advanced task dependencies.
- Push notifications are optional for the first release.

### 4.6. Heart Diary

**Priority:** Should Have

A simple journal for recording everyday moments.

Users can:

- Create text-based diary entries.
- View previous entries.
- Edit or delete their entries.
- Keep entries private.
- Optionally share entries within Couple Space.

**MVP Limitations:**

- Text-only entries.
- No photo or video uploads.
- No public sharing.
- No AI-generated journal analysis.

Heart Diary can be postponed if Little Kitchen, Tiny Planner, or Couple Space require additional development.

---

## 5. Features Outside MVP

The following features are planned for future exploration.

| Feature          | Initial Direction                                            |
| ---------------- | ------------------------------------------------------------ |
| Money Garden     | Shared budget, expense tracking, and financial goals         |
| Playroom         | Lightweight couple games, including LDR-friendly experiences |
| Buddy AI         | Conversational lifestyle companion                           |
| Advanced Kitchen | Saved recipes, meal planning, and richer recommendations     |
| Gamification     | Rewards, achievements, and playful progress indicators       |

### Playroom Concept

Potential first games:

- How Well Do You Know Me?
- This or That
- Couple Quest

The first Playroom release should prioritize simple turn-based or asynchronous experiences instead of complex real-time multiplayer infrastructure.

These ideas are not commitments for MVP v1.

---

## 6. User Experience Principles

Alongio's visual identity should be:

- Playful, cozy, and Gen Z-friendly.
- Warm and approachable.
- Simple without feeling empty.
- Colorful without overwhelming users.
- Consistent across different feature modules.
- Accessible and easy to navigate.

### Design Guidelines

- Use the established Alongio design system.
- Maintain consistency with existing FigCraft designs.
- Prefer reusable components.
- Keep primary actions easy to discover.
- Provide meaningful loading, empty, and error states.
- Avoid overly corporate dashboard patterns.

The UI/UX Designer must follow the existing Taste Skill and project design instructions.

---

## 7. Technical Principles

### Architecture

Follow `docs/architecture.md`.

The application uses the established data flow:

`Pages → Controllers → Services → Backend API`

Use:

- Axios for API communication.
- TanStack React Query for server state.
- TanStack React Store for UI state.
- Centralized interfaces for types and DTOs.
- Shared and custom components according to their responsibilities.

### Development Guidelines

- Follow existing folder conventions.
- Prefer installed dependencies.
- Avoid unnecessary abstractions.
- Keep code readable and maintainable.
- Consider Android and iOS compatibility.
- Maintain basic security and data privacy.
- Never store sensitive API credentials in client code.

---

## 8. MVP Definition of Done

MVP v1 is considered ready for release when:

- [ ] Authentication and account sessions work correctly.
- [ ] Personal Mode is usable independently.
- [ ] Partner invitation and Couple Space work correctly.
- [ ] Personal and shared data are properly separated.
- [ ] Home navigation is functional.
- [ ] Little Kitchen generates usable recipe recommendations.
- [ ] Tiny Planner supports personal and shared tasks.
- [ ] Heart Diary is functional, if included in the final release scope.
- [ ] Loading, empty, and error states are implemented.
- [ ] No known critical bugs remain.
- [ ] Core flows have been tested on Android and iOS.
- [ ] Essential privacy and account-management requirements are met.
- [ ] The application is ready for store review and submission.

---

## 9. Future Roadmap

### MVP v1 — Our Little Life

Focus:

- Authentication
- Personal & Couple Space
- Home
- Little Kitchen
- Tiny Planner
- Heart Diary (if feasible)

### v1.1 — More Fun Together

Explore:

- Playroom
- Couple mini-games
- Improvements based on early feedback

### v1.2 — Growing Together

Explore:

- Money Garden
- Shared budgets
- Financial goals

### v1.3 — Your Little Companion

Explore:

- Buddy AI
- Context-aware lifestyle assistance
- Optional integrations with existing Alongio features

Roadmap versions are directional, not fixed release commitments.

---

## 10. Development Philosophy

Alongio is a personal side project.

The primary goals are creativity, learning, enjoyment, and building a useful application.

Development principles:

- No unnecessary deadlines.
- Avoid overengineering.
- Prioritize a functional MVP over feature quantity.
- Keep the development process enjoyable.
- Make incremental improvements.
- Learn through independent coding.
- Use AI as a mentor and design assistant.
- Do not introduce complexity solely for future scalability.

**Success is defined by building something enjoyable and useful, not by generating revenue.**
