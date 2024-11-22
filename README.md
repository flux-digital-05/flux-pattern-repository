# Frontend boilerplate

## Run application

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy application

```bash
npm run build
```

## How to add new components

The properties of a component must be declared inside the component and export when it need.

```typescript
export interface Example {}
```

Folder structure

```
frontent-boilerplate/
├── src/
│   ├── app/
│   │   ├── components/
│   │   |   ├── Example/
│   │   │   |   ├── Example.tsx
```

## How to add new hooks

The properties of a hook must be declared inside the hook and export when it need.

```typescript
export interface Example {}
```

Folder structure

```
frontent-boilerplate/
├── src/
│   ├── app/
│   │   ├── hooks/
│   │   |   ├── useExample.ts
```

## How to add new interface

Each interface maps a API router.

```typescript
export interface IExample {}
```

Folder structure

```
frontent-boilerplate/
├── src/
│   ├── app/
│   │   ├── interface/
│   │   |   ├── IExample.ts
```
