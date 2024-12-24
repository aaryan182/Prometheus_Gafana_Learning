## Overview

**Prometheus** is an open-source monitoring and alerting toolkit designed for reliability and scalability. It collects metrics from configured targets at specified intervals, evaluates rule expressions, displays results, and can trigger alerts if certain conditions are met. :contentReference[oaicite:0]{index=0}

**Grafana** is an open-source analytics and monitoring platform that integrates with various data sources, including Prometheus. It allows users to create interactive and dynamic dashboards for visualizing metrics, logs, and traces. :contentReference[oaicite:1]{index=1}

## Metric Types

Prometheus supports several metric types each serving distinct purposes:

### 1. Counter

A **Counter** is a cumulative metric that represents a single monotonically increasing value, which can only increase or be reset to zero upon restart.

**Use Cases:**

- Counting the number of requests served.
- Tracking the number of tasks completed.
- Monitoring the number of errors encountered.

### 2. Gauge

A Gauge represents a single numerical value that can arbitrarily go up and down

**Use Cases:**

- Measuring current memory usage.
- Tracking the number of active threads.
- Monitoring system temperature.

### 3. Histogram

A Histogram samples observations (e.g request durations or response sizes) and counts them in configurable buckets. It also provides a sum of all observed values.

**Use Cases:**

- Measuring request duration.
- Tracking response size distributions.


