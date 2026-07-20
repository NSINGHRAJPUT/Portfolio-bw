# NSRGFX AI Experience Architecture

This document defines the architecture for the AI experience suite without implementing runtime logic yet.

## Experiences

1. AI Chat
2. Project Estimator
3. Proposal Generator
4. Resume Review
5. Business Idea Validator
6. Website Audit
7. Prompt Generator
8. Content Generator

Definitions for these experiences live in `src/config/ai-experiences.ts`.

## Layered Architecture

### 1) Experience Layer
- Owns page-level flows and experience-specific forms/results.
- Keeps each experience independent while sharing common UI primitives.

### 2) Orchestration Layer
- Converts structured inputs into model-ready prompts.
- Routes requests to the right model/tool chain per experience.
- Produces normalized typed outputs for stable rendering.

### 3) Guardrails Layer
- Validates inputs and outputs with strict schemas.
- Applies moderation/safety checks.
- Adds low-confidence fallbacks and uncertainty disclosures.

### 4) Service Layer
- Encapsulates OpenAI/Supabase/analytics clients.
- Prevents direct vendor coupling in feature modules.

### 5) Data Layer
- Persists sessions, generated artifacts, user feedback, and events.
- Enables analytics loops for iterative prompt and UX optimization.

## Standard Workflow

1. Validate request payload.
2. Build context from user input + saved session.
3. Assemble prompt chain and select model/tool path.
4. Execute generation.
5. Validate output against experience schema.
6. Persist artifact + telemetry.
7. Return structured result + conversion CTA handoff.

## Data Entities (Planned)

- `ai_sessions`
- `ai_messages`
- `ai_artifacts`
- `ai_feedback`
- `ai_events`

## Non-Goals (Current Phase)

- No feature UI implementation.
- No API route implementation for each experience.
- No DB migration scripts yet.

This phase is architecture-first to ensure scalable, production-safe implementation in the next phase.
