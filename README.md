# flux-pattern-repositoty

## Commands

### Run application

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deploy application

```bash
npm run build
```

## How add new ...

### Components

The properties of a component must be declared inside the component and export when it need.

```typescript
export interface Example {}
```

Folder structure

```
flux-pattern-repositoty/
├── src/
│   ├── app/
│   │   ├── components/
│   │   |   ├── Example/
│   │   │   |   ├── Example.tsx
```

### Hooks

The properties of a hook must be declared inside the hook and export when it need.

```typescript
export interface Example {}
```

Folder structure

```
flux-pattern-repositoty/
├── src/
│   ├── app/
│   │   ├── hooks/
│   │   |   ├── useExample.ts
```

### Interface

Each interface maps a API router.

```typescript
export interface IExample {}
```

Folder structure

```
flux-pattern-repositoty/
├── src/
│   ├── app/
│   │   ├── interface/
│   │   |   ├── IExample.ts
```

## Conventional commits pattern

- **test**: create tests.
- **feat**: create new functionalities.
- **refactor**: refactor something (viewer or logic).
- **style**: add new styles.
- **fix**: fix some bugs.
- **chore**: add something that don't change the code.
- **docs**: add code documentation.
