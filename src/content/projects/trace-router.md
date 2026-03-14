---
title: "trace-router"
description: "Internet traffic visualisation tool"
tags: ["full-stack", "golang", "visualisation"]
repo: "https://github.com/voltracker/trace-router"
date: 2025-02-20
---

Traffic visualisation tool built with golang in the back and react in the front, backed by a postgres database.

## Backend

By using Google's [PCAP library](https://pkg.go.dev/github.com/google/gopacket/pcap), I could sniff packets off the wire
as they were being sent and received by the host. I used this library to take a sample of these packets and fire off
a `traceroute` to the destination IP on a seperate thread. Once this comes back, we insert the hops into the DB.

## Frontend

When a user comes to the frontend, the hops are pulled back from the DB. Geolocation data from a publicly available API
is stored alongside the hop data in the DB, allowing the front end to display the location of each server that a packet
has gone through. Depending on the latency/number of times a hop has been taken, the appearance of the link/pin changes.

```go
func main() {
  // I might be a comment
  os.Getenv("BALLS")
}
```
