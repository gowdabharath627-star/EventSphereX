# EventSphereX – Real-Time Event Management & Analytics Platform

EventSphereX is an end-to-end **Event Management and Data Analytics platform** designed to collect, process, transform, and analyze event-related data such as users, events, bookings, payments, food sales, crowd activity, and incidents.

The project demonstrates a complete data pipeline starting from operational data storage and real-time event streaming to data transformation, analytical data warehousing, APIs, dashboards, and business intelligence.

## Project Objective

The main objective of EventSphereX is to centralize event-related data and transform it into meaningful information for analysis and decision-making.

The platform helps monitor key business metrics such as:

* Revenue
* Bookings
* Payment performance
* Food sales
* Crowd activity
* Incident information
* User activity
* Event performance

## Architecture

```text
Synthetic Data Generation
          ↓
        MySQL
   Operational Database
          ↓
        Kafka
  Real-Time Event Streaming
          ↓
   Python ETL Pipeline
   ├── Extract
   ├── Clean
   ├── Validate
   └── Transform
          ↓
 PostgreSQL Data Warehouse
      Star Schema
          ↓
     SQL Analytics
          ↓
      Backend API
          ↓
    React Dashboard
          ↓
       Power BI
```

## Data Pipeline

The project follows an ETL-based architecture.

### 1. Extract

Data is collected from the operational MySQL database. The project also simulates real-time data flow using Kafka.

### 2. Transform

Python, Pandas, and NumPy are used for data processing and transformation.

The transformation stage includes:

* Handling missing values
* Detecting duplicate records
* Data-type validation
* Data formatting
* Relationship and foreign-key validation
* Data transformation
* Preparing data for analytical storage

### 3. Load

The transformed data is loaded into a PostgreSQL-based data warehouse.

The warehouse follows a **Star Schema** consisting of fact and dimension tables for analytical reporting.

## Real-Time Data Processing

Kafka is used as the event-streaming layer to simulate the flow of new event-related records.

```text
Producer
   ↓
Kafka Topic
   ↓
Consumer
   ↓
Python ETL
   ↓
PostgreSQL
```

Kafka is responsible for streaming the events, while Python handles the processing and transformation of the data.

## Data Warehouse

PostgreSQL is used as the analytical data warehouse.

The warehouse uses a **Star Schema**, where fact tables contain measurable business events and dimension tables provide descriptive information.

This structure makes analytical queries and BI reporting easier.

## Full Load and Incremental Load

The ETL pipeline supports two loading approaches.

### Full Load

Loads the complete dataset during the initial data load.

### Incremental Load

Processes only new or changed records during subsequent loads.

Incremental loading helps reduce unnecessary processing and prevents repeatedly processing the complete dataset.

## Analytics and Business Intelligence

SQL is used to create analytical queries and views for reporting.

Power BI is used to visualize important KPIs and business metrics through interactive dashboards.

Example KPIs include:

* Total Revenue
* Total Bookings
* Payment Success Rate
* Refund Rate
* Food Sales
* Crowd Score
* Incident Response Time
* User Metrics
* Ticket Metrics

## API Layer

The processed analytical data is exposed through REST APIs so that the frontend can consume and display the required information.

The API layer acts as a bridge between the analytical database and the dashboard application.

## Technology Stack

| Component            | Technology      |
| -------------------- | --------------- |
| Programming          | Python          |
| Data Processing      | Pandas, NumPy   |
| Operational Database | MySQL           |
| Streaming            | Apache Kafka    |
| ETL                  | Python          |
| Data Warehouse       | PostgreSQL      |
| Querying             | SQL             |
| Backend API          | REST API        |
| Frontend             | React           |
| Visualization        | Power BI        |
| Database Platform    | Neon PostgreSQL |

## Data Quality and Validation

Data quality checks are performed during the ETL process to ensure reliable data before loading it into the warehouse.

The validation process includes:

```text
Source Data
    ↓
Null Check
    ↓
Duplicate Check
    ↓
Data-Type Check
    ↓
Relationship Validation
    ↓
Row-Count Validation
    ↓
Transformation
    ↓
Warehouse Load
```

## Business Value

EventSphereX demonstrates how an organization can move from raw operational data to meaningful business insights through a structured data pipeline.

Instead of manually checking different sources, decision-makers can use centralized dashboards to understand event performance, revenue, bookings, payments, crowd activity, and incidents.

## Key Learning Outcomes

Through this project, I gained practical exposure to:

* ETL pipeline development
* Python data processing
* Pandas and NumPy
* SQL
* Database normalization concepts
* Data validation
* Full and Incremental Loading
* Kafka event streaming
* Data warehouse concepts
* Star Schema design
* REST APIs
* React dashboards
* Power BI and KPI reporting

## Project Summary

**EventSphereX demonstrates an end-to-end data engineering and analytics workflow that transforms operational and streaming event data into structured warehouse data and business insights through SQL, APIs, React, and Power BI.**
