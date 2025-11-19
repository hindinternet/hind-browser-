# Config Module

This folder stores all global configuration files and environment settings required for the Hind Browser project.

## Purpose of the Config Layer

- Central location for all project settings
- Keep sensitive values (API keys, secrets) separated
- Allow environment-based customization
- Make the project easy to scale and maintain

---

## Basic Config Structure

1. **env/**
   - Environment-specific settings
   - Example: development, production, testing
   - Files: `.env.dev`, `.env.prod` (not to be uploaded)

2. **app.json**
   - Application-level settings
   - App version, mode, default language, theme

3. **security.json**
   - Security rules
   - Allowed origins, permissions, safe domains

4. **database.json**
   - Database connection configuration
   - Type, host, port, credentials (never store real passwords)

5. **routes.json**
   - Mapping for API endpoints and modules

---

## Future Files (To Be Added)

- `cache.json`
- `logger.json`
- `browser-flags.json`

---

### Status: Basic config structure added
