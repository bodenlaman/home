---
title: "Homelab"
description: "Upcycling a Lenovo Thinkcentre and remotely managing it 250+ miles away"
date: 2026-04-01T09:00:00Z
categories: ["Projects"]
series: ["App Concepts and Development"]
seriesOrder: 4
tags: ["IT", "linux"]
draft: false
---

## The Inspiration
After experiencing one too many "You're away from home" and other related errors from streaming services, I finally decided to hop into the world of self-hosting a Jellyfin server.
## My Goals
{{< callout type="note" >}}
The criteria for this project:
- Easily stream movies and tv shows to a plethora of devices, and through a domain that is publicly accessible. 
- Automatically back up and sync all of my photos, from my DSLR camera to my iPhone, in one easily accessible website.
- Versatility: The ability to add services as needed, such as a Minecraft Java server, or a remote web instance of Chromium, for protected internet browsing.

{{< /callout >}}


## The workflow
One aspect of this project that I wanted to emphasize, was uptime, reliability, and also lower power consumption. Since the main hardware is a mini-pc, the CPU (AMD Ryzen XXX) already uses less power than a typical computer and server. This allowed me to take advantage of various UEFI/ Firmware settings to ensure that if the system crashes, loses power, or runs into any other issue, it will recover itself.

## What's operational
> Despite some intermittent downtime, the following services have been tested and work under various scenarios (streaming content from various locations, photo backups over 5G Cellular, etc.)
---

## Media & Streaming
1. Jellyfin
- Similar to Netflix, and other streaming services. Allows public access through website or app, with user profiles, media requesting, and more.

1.1 ersatzTV (legacy)
- ersatzTV is a handy plugin that lets lets a user create custom ITPV channels based off of their local media library. For my homelab, this allows me to create an "all-in-one" type of service, with on-demand movies, but also custom channels that can play a mix of series and moves based on their studio, release date, genre, or anything in between!
## Photo Backup & File Management
2. Immich
- Immich is an open-source alternative to Google or iCloud photos, with a design similar to the former. Once your domain is setup, you can download the mobile app or type in photos.[yoursite].com to access your entire camera roll, make edits, download, or upload content.

## Troubleshooting and hardships
> Storage is expensive!

One major challenge that I faced and continue to face throughout this project is finding parts. Due to the Lenovo ThinkCentre being a mini-pc, there's only one full size SATA port and one NVME slot on the motherboard. That meant almost all of my external storage would have to come from the USB ports. Luckily the ThinkCentre has six 3.0 ports, allowing me to find a second-hand SATA-RAID system and install ~3.5 TB of space.s

> The homelab doesn't appear to be able to recover itself?

Another major challenge that I'm still troubleshooting, is a cold boot. Either due to a firmware issue or boot configuration error, the Thinkcentre will hang at the Lenovo logo and not proceed with the boot process.




