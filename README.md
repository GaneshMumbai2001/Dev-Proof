# Dev Proof

## Overview
DevProof is a blockchain-powered platform that tracks and rewards developers for their contributions on GitHub. It leverages smart contracts to ensure fair and transparent reward distribution based on the quality of contributions. Developers can stake Core tokens, earn rewards, and generate additional yield through a weekly leaderboard system. AI is integrated into the platform to validate the legitimacy of commits, ensuring that only meaningful contributions are considered for rewards. This helps maintain fairness and prevents spam or low-quality submissions. With DevProof, developers are incentivized to make impactful contributions while benefiting from a decentralized and trustless reward system.

## Features
- Weekly GitHub contribution tracking
- Fair reward distribution using Core tokens
- Staking mechanism with MetaMask integration
- Leaderboard ranking system
- AI-powered commit verification using Pollinations API
- Email notifications for updates
- Chatbot support for developer queries

## Technologies Used
- **Frontend:** Vite, React.js, TailwindCSS, JavaScript
- **Blockchain:** Solidity, Ether.js
- **APIs:** GitHub REST API, Pollinations API
- **Authentication:** GitHub OAuth
- **Email Notifications:** NodeMailer


## How It Works
1. Developers connect their GitHub and MetaMask wallets.
2. They stake Core tokens to participate in the weekly reward system.
3. GitHub contributions are analyzed using the Pollinations API.
4. Points are assigned based on contribution quality and quantity.
5. The top contributors are ranked on a leaderboard and rewarded accordingly.
6. Yielding mechanism allows for additional rewards over time.

## Challenges Faced
- Ensuring fair reward distribution while avoiding spam and low-quality contributions.
- Managing GitHub API rate limits for efficient data fetching.
- Optimizing smart contracts to reduce gas fees.
- Implementing security measures to prevent fraudulent activities.

## Future Plans
- Expanding support for additional version control platforms.
- Introducing more staking options and reward mechanisms.
- Enhancing security with advanced fraud detection.
- Improving AI algorithms for better commit evaluation.

## Getting Started
### Prerequisites
- Node.js installed
- MetaMask wallet setup
- GitHub account

### Installation
```sh
# Clone the frontend repo
git clone https://github.com/manicdon7/DevProof.git
cd DevProof
npm install
npm run dev

### Running Locally
1. Start the frontend:
   ```sh
   npm run dev
   ```
