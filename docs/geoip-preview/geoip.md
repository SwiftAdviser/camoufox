By passing `geoip=True`, or passing in a target IP address, Camoufox will automatically use the target IP's longitude, latitude, timezone, country, locale, & spoof the WebRTC IP address.

It will also calculate and spoof the browser's language based on the distribution of language speakers in the target region.

==- See BrowserScan demo

<image src="../../static/proxy-leak-demo.png">

==-

<hr width=50>

## Installation

Install Camoufox with the `geoip` extra:

```bash
pip install -U "camoufox[geoip]"
```

<hr width=50>

## Usage

Pass in `geoip=True` with Playwright's `proxy` parameter. For example, with [NodeMaven](https://go.nodemaven.com/camoufoxtoolsept), [Node Proxy](https://node-proxy.com), or [ProxyLane](https://proxylane.dev) proxies:

+++ NodeMaven

```python
with Camoufox(
    geoip=True,
    proxy={
        'server': 'http://gate.nodemaven.com:8080',
        'username': 'username',
        'password': 'password'
    }
) as browser:
    page = browser.new_page()
    page.goto("https://www.browserscan.net")
```

+++ Node Proxy

```python
with Camoufox(
    geoip=True,
    proxy={
        'server': 'http://gate.node-proxy.com:10000',
        'username': 'username',
        'password': 'password'
    }
) as browser:
    page = browser.new_page()
    page.goto("https://www.browserscan.net")
```

+++ ProxyLane

```python
with Camoufox(
    geoip=True,
    proxy={
        'server': 'http://us.gw.proxylane.dev:10000',
        'username': 'username_c_US_city_Chicago_s_mysession',
        'password': 'password'
    }
) as browser:
    page = browser.new_page()
    page.goto("https://www.browserscan.net")
```

+++

!!!warning
**It's important to use residential proxies with Camoufox for the best results.**
!!!

<hr width=50>

=== :icon-shield-check: **Check out NodeMaven's residential proxies!**

<a href="https://go.nodemaven.com/camoufoxtoolsept" target="_blank">
  <img alt="NodeMaven Banner" src="../../static/nodemaven.png" style="margin-bottom: 1rem !important; max-width: 25%;"/>
</a>

[NodeMaven](https://go.nodemaven.com/camoufoxtoolsept): The most efficient proxy provider for Web Scrapping and Automation with the Highest Quality IP on the market.

**Why [NodeMaven](https://go.nodemaven.com/camoufoxtoolsept)?**

- 99.9% uptime
- ZIP Targeting
- IP filtering: all proxies have fraud score <97%
- No KYC required
- Unique free tools: Proxy Bandwidth Checker, Meta Tag Checker, IP Lookup and others!  

**Special codes for Camoufox users:**

- `CAMOUFOX35` - 35% off to Mobile and Residential Proxies
- `CAMOUFOX40` - 40% off to ISP (Static) Proxies

=== :icon-shield-check: **Check out Node Proxy**

<a href="https://node-proxy.com" target="_blank">
  <img alt="Node Proxy" src="../../static/nodeproxy-wide.jpg" style="margin-bottom: 1rem !important; max-width: 25%;"/>
</a>

**Residential, mobile and datacenter proxies** for antidetect browsers and any emulation or automation tooling — with **100% Camoufox support**.

**How we differ from other providers**

- **90+ IP score:** Every address is checked for reputation before it reaches your session
- **HTTP + SOCKS5:** Full multiprotocol support out of the box
- **Retail discounts:** Special pricing for individual customers, not just for volume
- **Full B2B support:** Dedicated assistance for teams and companies
- **Ethically sourced IPs:** A transparent, consent-based address pool
- **Enterprise terms:** Custom conditions for large-scale clients

**Special offer**

!!!success 🎁 30% off residential proxies
Use the promo code `CAMOUFOX` at checkout.
!!!

**Get started**

- **Website:** [node-proxy.com](https://node-proxy.com)
- **Support:** [@node_support](https://t.me/node_support) · support@node-proxy.com

=== :icon-shield-check: **Check out ProxyLane**

<a href="https://proxylane.dev" target="_blank">
  <img alt="ProxyLane" src="../../static/proxylane.png" style="margin-bottom: 1rem !important; max-width: 25%;"/>
</a>

[ProxyLane](https://proxylane.dev): Residential proxies for **regional storefront checks, multi-page scraping and AI-agent browsing**.

**Why ProxyLane?**

- **City targeting and named sticky sessions** for linked pages
- **One-time prepaid traffic never expires** between scheduled runs
- **350 MB paid trial: $1.95** to test your target

City availability varies. Sticky sessions are not exclusive IP reservations. If the exit IP changes, relaunch Camoufox and verify again.

[Camoufox setup guide](https://proxylane.dev/blog/camoufox-proxy).

Camoufox users get 35% off with `CAMOULANE35`.

===
