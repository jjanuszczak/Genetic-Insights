# Gene-Insights Forum: Manila Mastermind & Mixer

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/jjanuszczak/Genetic-Insights)

A sophisticated, visually stunning landing page for collecting registrations for the 'Manila Mastermind & Mixer' virtual talk on cancer genetics and precision medicine.

## Project Overview

This project is a professional and minimalist landing page designed to capture registrations for the virtual event featuring Dr. Frances Victoria “Ishka” Que. The page focuses on the talk 'Genetic Insights for a World Without Cancer'. It features a clean, single-page layout with a prominent hero section, detailed speaker biography, a compelling section on why the topic is crucial for expats, a simple and elegant registration form, and a professional footer.

The design prioritizes clarity, user experience, and visual excellence, using a sophisticated color palette, refined typography, and subtle micro-interactions to create a polished and trustworthy impression.

## Key Features

-   **Stunning Hero Section:** An impactful, above-the-fold introduction to the event.
-   **Detailed Speaker Information:** A dedicated section with the speaker's photo and professional biography.
-   **Value Proposition:** A clear, multi-column layout explaining why this topic matters to the target audience (expats).
-   **Elegant Registration Form:** A focused, easy-to-use form for capturing attendee information with client-side validation.
-   **Fully Responsive Design:** A flawless layout that adapts perfectly to all device sizes, from mobile to desktop.
-   **Minimalist & Professional Aesthetic:** A clean, modern design that builds trust and credibility.
-   **Smooth Animations & Micro-interactions:** Subtle animations and hover effects that enhance the user experience.

## Technology Stack

-   **Framework:** React (Vite)
-   **Styling:** Tailwind CSS with shadcn/ui components
-   **Animations:** Framer Motion
-   **Form Management:** React Hook Form with Zod for validation
-   **Icons:** Lucide React
-   **Deployment:** Cloudflare Pages & Workers

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/gene_insights_forum.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd gene_insights_forum
    ```
3.  **Install dependencies:**
    ```bash
    bun install
    ```

## Development

To run the application in a local development environment, use the following command. This will start a development server, typically on `http://localhost:3000`.

```bash
bun run dev
```

The server supports hot-reloading, so any changes you make to the source code will be reflected in the browser automatically.

## Linting

To check the code for any linting issues, run:

```bash
bun run lint
```

## Deployment

This project is configured for seamless deployment to Cloudflare Pages.

To deploy your application, simply run the following command:

```bash
bun run deploy
```

This command will build the application and deploy it using the Wrangler CLI.

Alternatively, you can deploy directly from your GitHub repository.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/jjanuszczak/Genetic-Insights)