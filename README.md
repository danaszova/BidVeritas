
# **SSP Bid Request Testing Framework**

Welcome to the **SSP Bid Request Testing Framework**! This project provides a complete, realistic testing environment for developers building **DSP bidders** by simulating bid requests for major **Supply-Side Platforms (SSPs)**. Whether you're working on OpenRTB integrations or testing DSP responses, this tool simplifies the process by offering **realistic bid request templates** for multiple ad formats.

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

---

## **Getting Started**

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/ssp-bid-request-framework.git
cd ssp-bid-request-framework


## 2. Install Dependencies
```bash
npm install

## 3. Start the Server

```bash
npm run start:dev

## 4. Access the API

Once the server is running, you can use the `/generate-bid-request` endpoint to fetch bid request templates:

```http
GET /generate-bid-request?ssp={ssp_name}&format={ad_format}

## Supported SSPs & Ad Formats

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
Start the server using:

```bash
npm run start:dev
