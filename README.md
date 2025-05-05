# Next.js Authentication App

A full-stack authentication system built with:

-   ✅ Next.js App Router
-   ✅ Prisma ORM
-   ✅ PostgreSQL (Clever Cloud)
-   ✅ API Routes for Register/Login
-   ✅ Client-side forms with Tailwind CSS

---

## 🔧 Technologies

-   **Framework:** [Next.js 14+](https://nextjs.org/)
-   **ORM:** [Prisma](https://www.prisma.io/)
-   **Database:** PostgreSQL (Clever Cloud)
-   **Styling:** Tailwind CSS
-   **Security:** bcrypt (password hashing)

---

## 📁 Project Structure

```
.
├── app/
│   ├── api/auth/            # API routes for login and register
│   ├── login/               # Login form page
│   ├── register/            # Registration form page
│   └── dashboard/           # Protected route example
├── lib/
│   ├── db.ts                # Prisma client instance
│   └── authentication.ts   # Auth logic using Prisma
├── prisma/
│   └── schema.prisma        # Prisma data models
├── types/
│   └── user.d.ts            # (Optional) User types
├── .env.local               # Environment variables
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the database

Create a `.env.local` file in the root:

```env
POSTGRESQL_ADDON_HOST=your-clever-cloud-host
POSTGRESQL_ADDON_PORT=50013
POSTGRESQL_ADDON_USER=your-db-user
POSTGRESQL_ADDON_PASSWORD=your-db-password
POSTGRESQL_ADDON_DB=your-db-name

DATABASE_URL="postgresql://${POSTGRESQL_ADDON_USER}:${POSTGRESQL_ADDON_PASSWORD}@${POSTGRESQL_ADDON_HOST}:${POSTGRESQL_ADDON_PORT}/${POSTGRESQL_ADDON_DB}"
```

### 4. Push the schema to your DB

```bash
npx prisma db push
```

### 5. Start the development server

```bash
npm run dev
```

Visit:

-   `/register` to create an account
-   `/login` to log in

---

## 🔐 Features

-   User registration with hashed passwords
-   Email uniqueness check
-   Login with bcrypt password comparison
-   API routes using App Router (`/api`)
-   Optional: JWT or session support (coming soon)

---

## 🛠 Commands

| Command               | Description                    |
| --------------------- | ------------------------------ |
| `npm run dev`         | Start development server       |
| `npx prisma studio`   | Open Prisma DB GUI             |
| `npx prisma db push`  | Sync Prisma schema to database |
| `npx prisma generate` | Regenerate Prisma client       |

---

## 📄 License

MIT © Deepidia
