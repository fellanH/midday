# Midday - Application Overview

## Executive Summary

Midday is a comprehensive all-in-one business management platform specifically designed for freelancers, contractors, consultants, and solo entrepreneurs. The platform integrates multiple business functions that are typically scattered across different tools into a single, cohesive system, enabling users to run their businesses more efficiently.

## Core Business Concepts

### Target Users
- **Freelancers**: Independent professionals offering services
- **Contractors**: Project-based workers and consultants
- **Consultants**: Expert advisors providing specialized knowledge
- **Solo Entrepreneurs**: Single-person businesses and startups

### Value Proposition
Midday eliminates the complexity of managing multiple business tools by providing:
- Unified financial tracking and reporting
- Automated document processing and matching
- Time tracking with project management
- Professional invoicing capabilities
- Secure document storage
- AI-powered business insights

## Core Features & Modules

### 1. **Time Tracking (Tracker)**
- **Live Time Tracking**: Real-time project time monitoring
- **Project Management**: Organize work into trackable projects
- **Team Collaboration**: Multi-user project assignments
- **Productivity Insights**: Detailed project overviews and analytics
- **Reporting**: Generate time-based reports for clients and analysis

### 2. **Magic Inbox**
- **Automatic Document Processing**: AI-powered receipt and invoice recognition
- **Smart Matching**: Automatically matches incoming documents to transactions
- **Multi-Provider Support**: Gmail and Outlook integration
- **Document Classification**: Categorizes expenses vs. invoices
- **Workflow Automation**: Streamlines financial document organization

### 3. **Invoicing System**
- **Professional Invoice Creation**: Web-based invoice builder
- **Real-time Collaboration**: Multi-user invoice editing
- **Customizable Templates**: Branded invoice designs
- **Multiple Delivery Options**: Email, scheduled sending, PDF generation
- **Payment Tracking**: Monitor invoice status and payments
- **Multi-currency Support**: International business capabilities

### 4. **Vault (Document Storage)**
- **Secure File Storage**: Encrypted document repository
- **Document Organization**: Tagging and categorization system
- **Contract Management**: Store agreements and important files
- **Search Capabilities**: Full-text search across documents
- **Access Control**: Team-based document permissions

### 5. **Financial Management**
- **Bank Integration**: Multi-provider account connections (Plaid, GoCardless, Teller)
- **Transaction Categorization**: Automated expense classification
- **Multi-currency Support**: Handle international transactions
- **Financial Reporting**: Profit/loss, burn rate, revenue analytics
- **Tax Preparation**: Export data for accountants

### 6. **AI Assistant**
- **Financial Insights**: Spending pattern analysis
- **Cost Optimization**: Recommendations for expense reduction
- **Document Discovery**: AI-powered document search
- **Business Intelligence**: Tailored business advice
- **Automated Categorization**: Smart transaction classification

## Technical Architecture

### Monorepo Structure
The application follows a modern monorepo architecture powered by:
- **Turborepo**: Build system and task orchestration
- **Bun**: Package manager and runtime
- **TypeScript**: Type-safe development across all packages

### Applications (`apps/`)

#### Dashboard (`apps/dashboard`)
- **Technology**: Next.js 15, React 19, TypeScript
- **Purpose**: Main business management interface
- **Features**: Complete business dashboard with all core functionality
- **Deployment**: Vercel

#### API (`apps/api`)
- **Technology**: Hono, tRPC, TypeScript
- **Purpose**: Backend API services
- **Features**: RESTful and tRPC endpoints
- **Deployment**: Fly.io

#### Engine (`apps/engine`)
- **Technology**: Cloudflare Workers, Hono
- **Purpose**: Edge computing and AI processing
- **Features**: Bank integrations, AI services, search
- **Deployment**: Cloudflare Workers

#### Desktop (`apps/desktop`)
- **Technology**: Tauri, Rust, TypeScript
- **Purpose**: Native desktop application
- **Features**: Transparent titlebar, multi-environment support
- **Platforms**: macOS, Windows, Linux

#### Website (`apps/website`)
- **Technology**: Next.js
- **Purpose**: Marketing and landing pages
- **Deployment**: Vercel

#### Docs (`apps/docs`)
- **Technology**: Documentation platform
- **Purpose**: Developer and user documentation

### Shared Packages (`packages/`)

#### Core Business Logic
- **`inbox`**: Email processing and document matching
- **`invoice`**: Invoice generation and management
- **`documents`**: Document storage and search
- **`import`**: Data import utilities
- **`jobs`**: Background job processing

#### Infrastructure
- **`supabase`**: Database client and types
- **`encryption`**: Data encryption utilities
- **`events`**: Event tracking and analytics
- **`notification`**: Multi-channel notifications
- **`location`**: Geographic services

#### UI & Client
- **`ui`**: Shared React components and design system
- **`utils`**: Common utilities and helpers
- **`engine-client`**: Client for engine services
- **`desktop-client`**: Desktop app specific utilities

### Data Architecture

#### Database (Supabase PostgreSQL)
The application uses a comprehensive database schema with key entities:

**Core Entities:**
- **Teams**: Multi-tenant organization structure
- **Users**: Authentication and user management
- **Bank Accounts**: Financial account connections
- **Transactions**: Financial transaction records
- **Customers**: Client and customer management
- **Projects**: Time tracking project organization

**Document Management:**
- **Documents**: File storage with full-text search
- **Inbox**: Incoming document processing queue
- **Document Tags**: Categorization and organization

**Business Operations:**
- **Invoices**: Invoice lifecycle management
- **Tracker Entries**: Time tracking records
- **Reports**: Business analytics and insights

**Advanced Features:**
- Full-text search with multiple language support
- Vector embeddings for semantic search
- Multi-currency exchange rate handling
- Automated transaction categorization
- Recurring transaction detection

### Integration Architecture

#### Banking Providers
- **Plaid**: North American bank connections
- **GoCardless**: European bank connections
- **Teller**: US bank connections
- **EnableBanking**: Additional European coverage

#### Email Providers
- **Gmail**: Google Workspace integration
- **Outlook**: Microsoft 365 integration

#### AI & Machine Learning
- **OpenAI**: GPT models for insights and categorization
- **Mistral**: Alternative AI provider
- **Vector Search**: Semantic document and transaction search

#### Infrastructure Services
- **Trigger.dev**: Background job processing
- **Resend**: Transactional and marketing emails
- **Novu**: Multi-channel notifications
- **Typesense**: Advanced search capabilities
- **OpenPanel**: Analytics and event tracking
- **Polar**: Payment processing

### Security & Privacy

#### Data Protection
- **Encryption**: End-to-end encryption for sensitive data
- **Access Control**: Role-based team permissions
- **Audit Logging**: Comprehensive activity tracking
- **GDPR Compliance**: European privacy regulation adherence

#### Authentication
- **Supabase Auth**: JWT-based authentication
- **Multi-factor Authentication**: Enhanced security options
- **API Key Management**: Secure API access

## Development Workflow

### Environment Management
- **Development**: Local development environment
- **Staging**: Beta testing environment (`beta.midday.ai`)
- **Production**: Live application (`app.midday.ai`)

### Build & Deployment
- **Turborepo**: Optimized build caching and parallelization
- **GitHub Actions**: Continuous integration and deployment
- **Multi-environment**: Separate deployments for each environment

### Quality Assurance
- **TypeScript**: Type safety across the entire codebase
- **Biome**: Code formatting and linting
- **Testing**: Automated test suites with Bun
- **Performance**: Monitoring with Baselime

## Business Model

### Licensing
- **AGPL-3.0**: Open source for non-commercial use
- **Commercial License**: Available for commercial deployments
- **Contact**: `engineer@midday.ai` for commercial licensing

### Pricing Tiers
- **Trial**: Full feature access for evaluation
- **Starter**: Entry-level pricing for small businesses
- **Pro**: Advanced features for growing businesses

## Roadmap & Vision

### Current State
- Fully functional business management platform
- Active development and feature expansion
- Growing user base and community engagement

### Future Development
- Enhanced AI capabilities and insights
- Extended integration ecosystem
- Mobile application development
- Advanced automation features

## Community & Recognition

### Industry Recognition
- Featured on Hacker News
- Product Hunt featured product
- Active open-source community

### Development Community
- Open source contributions welcome
- Comprehensive documentation
- Active Discord community
- Regular feature updates

---

This overview provides a comprehensive understanding of Midday's architecture, features, and business concepts. The platform represents a modern approach to business management software, combining powerful functionality with developer-friendly architecture and user-centric design.