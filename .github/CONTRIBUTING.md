# Contributing to Astron Collection

🎉 Thanks for your interest in contributing to the Astron Collection!  
We’re building a powerful open-source suite of Discord applications and tools, and your help is always welcome.

---

## 📦 What is Astron?

**Astron Collection** is a set of modular and extensible Discord applications designed to improve server management, moderation, analytics, and user interaction.

---

## 💡 Ways to Contribute

You can contribute in several ways:

- 🐛 Reporting bugs
- ✨ Suggesting new features
- 🧱 Creating or improving plugins/extensions
- 🧪 Writing tests or improving coverage
- 🛠 Improving documentation (README, guides, examples)
- 🌍 Translating and internationalizing content
- 📦 Submitting a pull request for core apps or SDKs

---

## 🛠 Development Setup

1. **Fork the repository**
2. Clone your fork:
   ```bash
   git clone https://github.com/astron-collection/astron-api.git
```

3. Navigate to the project:

   ```bash
   cd astron
   ```
4. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   ```
5. Run in development mode:

   ```bash
   pnpm dev
   ```

Make sure your code passes linting and tests before submitting:

```bash
pnpm lint
pnpm test
```

---

## 🔄 Creating a Pull Request

1. Create a new branch:

   ```bash
   git checkout -b feat/my-new-feature
   ```
2. Make your changes
3. Commit with a meaningful message:

   ```bash
   git commit -m "feat(core): add new feature for XYZ"
   ```
4. Push and create a Pull Request on GitHub

---

## 📁 Project Structure Overview

```bash
/apps
  logger/
  modmail/
  player/
  ...
/packages
  sdk-node/
  sdk-python/
  ui/               # GUI dashboard
  api/              # Raw API server
```

---

## 📌 Code Guidelines

* Use **TypeScript**
* Follow our ESLint + Prettier rules
* Keep commits clean and atomic
* Use conventional commits (e.g. `feat:`, `fix:`, `docs:`)
* Document new features in code and README if necessary

---

## 🧪 Testing

We aim for high-quality, stable code. If you're adding functionality, please include basic tests.

Test setup:

```bash
pnpm test
```

---

## 🤝 Code of Conduct

Please read our [CODE\_OF\_CONDUCT.md](../CODE_OF_CONDUCT.md)
We expect all contributors to follow it in all project spaces.

---

## 📬 Questions?

For anything else, join our [Discord server](https://discord.gg/astron) or open a discussion in the repository.

---

Thank you again for helping improve Astron 🚀