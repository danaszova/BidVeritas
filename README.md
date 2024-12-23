
# **BidVeritas Testing Framework**

Welcome to the **BidVeritas Testing Framework**! This project provides a complete, realistic testing environment for developers building **DSP bidders** by simulating bid requests for major **Supply-Side Platforms (SSPs)**. Whether you're working on OpenRTB integrations or testing DSP responses, this tool simplifies the process by offering **realistic bid request templates** for multiple ad formats.

---

## **Features**

- ✅ **Supports Multiple SSPs**:
  - Smart AdServer (Equativ), PubMatic, Index Exchange, Xandr, OpenX, TripleLift, Sharethrough, SpotX, Smaato, Verizon Media.

- ✅ **Ad Format Coverage**:
  - Banner, Video (VAST), Native, Audio, and CTV.

- ✅ **Realistic OpenRTB Templates**:
  - Based on actual SSP implementations, including GDPR/CCPA compliance, deal IDs, and custom fields.

- ✅ **Dynamic Testing Environment**:
  - Easily extendable with additional SSPs or formats.

- ✅ **Developer-Friendly**:
  - Ready-to-use templates to **simulate SSP bid requests** and validate DSP responses.

## New Features 🚀

BidVeritas is constantly evolving to provide the most accurate and efficient OpenRTB testing framework. Below are the latest features added to enhance your experience:

### 🔄 Realistic Bid Stream Simulation
- **Purpose**: Test your bidder under real-world conditions with authentic OpenRTB bid streams.
- **Details**: Mimics live traffic patterns, including frequency, volume, and realistic timing for maximum testing reliability.

### 🎲 Mock DSPs
- **Purpose**: Interact with simulated Demand-Side Platforms to validate integrations and troubleshoot without relying on live DSPs.
- **Details**: Mock DSPs support OpenRTB standards and customizable responses to match varied use cases.

### 🤖 Faker Integration
- **Purpose**: Generate dynamic, realistic data for comprehensive testing scenarios.
- **Details**: Utilizes `faker.js` to create diverse datasets, including user demographics, ad creatives, geo-locations, and more.

### ⚡ Performance-Focused Framework
- **Purpose**: Ensure your bidder performs optimally under high-stress conditions.
- **Details**: Tools for load testing, latency measurement, and scalability analysis included.

### 📊 Advanced Metrics
- **Purpose**: Gain deeper insights into your bidder's performance.
- **Details**: Analyze win rates, bid response times, error rates, and other KPIs in one place.

### 🛠️ Modular Architecture
- **Purpose**: Customize testing environments according to your needs.
- **Details**: Easily plug and play components, including bid stream simulators and DSP mock servers.





---

## **Table of Contents**

1. [Getting Started](#getting-started)
2. [Supported SSPs & Ad Formats](#supported-ssps--ad-formats)  
3. [Usage](#usage)  
   - [Run Locally](#run-locally)  
   - [Test with cURL](#test-with-curl)  
4. [Templates](#templates)  
5. [Contributing](#contributing)  
6. [License](#license)  


## Getting Started

### **1. Clone the Repository**
git clone https://github.com/yourusername/ssp-bid-request-framework.git
cd ssp-bid-request-framework

### 2. Install Dependencies
npm install

### 3. Start the Server
npm run start:dev

### 4. Access the API

Once the server is running, you can use the `/generate-bid-request` endpoint to fetch bid request templates:

GET /generate-bid-request?ssp={ssp_name}&format={ad_format}

### Supported SSPs & Ad Formats

| SSP               | Banner | Video | Native | Audio | CTV   |
|--------------------|--------|-------|--------|-------|-------|
| Smart AdServer     | ✅     | ✅    | ✅     |       | ✅    |
| PubMatic           | ✅     | ✅    |        |       |       |
| Index Exchange     | ✅     |       |        |       |       |
| Xandr              | ✅     | ✅    |        |       |       |
| OpenX              | ✅     |       |        |       |       |
| TripleLift         |        |       | ✅     |       |       |
| Sharethrough       |        |       | ✅     |       |       |
| SpotX              |        | ✅    |        |       | ✅    |
| Smaato             | ✅     |       |        | ✅    |       |
| Verizon Media      |        |       | ✅     |       |       |


## Usage

### Run Locally

1. Start the server using:
`npm run start:dev`
2. Use the `/generate-bid-request` endpoint with **SSP** and **ad format** parameters:
`GET /generate-bid-request?ssp={ssp_name}&format={ad_format}`

### Test with cURL
Example: Smart AdServer (Banner)
`curl -X GET "http://localhost:3000/generate-bid-request?ssp=smartadserver&format=banner"`

Example: SpotX (CTV)
`curl -X GET "http://localhost:3000/generate-bid-request?ssp=spotx&format=ctv"`

Refer to the **Supported SSPs & Ad Formats** table for available combinations.

### Templates
Each SSP has a dedicated directory under `src/templates` with JSON files for the ad formats they support. You can modify or add new templates as needed.
Directory Structure:
`src/templates/ ├── smartadserver/ │ ├── banner.json │ ├── video.json │ ├── native.json │ └── ctv.json ├── pubmatic/ │ ├── banner.json │ └── video.json ...`
### Adding a New SSP or Format
1. Create a new directory under `src/templates` for the SSP.
2. Add JSON files for supported ad formats.
3. Use the `loadTemplate` utility to load the new templates dynamically.

### Contributing
We welcome contributions! Here's how you can help:
* Add support for new SSPs or ad formats.
* Improve existing templates to reflect real-world use cases.
* Report issues or suggest features via GitHub Issues.
To contribute:
1. Fork this repository.
2. Create a new branch:
`git checkout -b feature/your-feature-name`
3. Commit and push your changes.
4. Open a pull request.

### License
This project is licensed under the **MIT License**. See the LICENSE file for details.

## Why Use This Framework?
* Build and test **DSP bidders** against **realistic SSP bid requests**.
* Simplify debugging and development with pre-configured templates.
* Fully compatible with OpenRTB protocols and developer-friendly.
Give us a ⭐ on GitHub if this tool helps you!
