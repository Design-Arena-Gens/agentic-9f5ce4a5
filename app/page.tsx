const transferTemplates = [
  {
    title: "Treasury Sweep",
    description: "Shift fiat surplus into BTC treasury pockets.",
    vector: "Fiat → Crypto",
    primary: "USD Corporate",
    secondary: "BTC Reserve"
  },
  {
    title: "Exchange Settlement",
    description: "Reconcile PSP exchange balances each hour.",
    vector: "Crypto → Fiat",
    primary: "USDC Exchange",
    secondary: "EUR Nostro"
  },
  {
    title: "Merchant Payout",
    description: "Scheduled weekend settlement for merchants.",
    vector: "Fiat → Fiat",
    primary: "USD Merchant Escrow",
    secondary: "ACH Rails"
  }
];

const networkStatus = [
  { network: "SEPA Instant", status: "Available", window: "24/7", latency: "~12 min" },
  { network: "FedNow", status: "Available", window: "08:00 - 21:00 UTC", latency: "~3 min" },
  { network: "Lightning", status: "Surge", window: "24/7", latency: "<1 min" },
  { network: "Ethereum", status: "Congested", window: "24/7", latency: "~7 min" }
];

const assetBreakdown = [
  { asset: "USD", type: "Fiat", amount: "$4.8M", direction: "Outflow", delta: "+18%" },
  { asset: "EUR", type: "Fiat", amount: "€1.2M", direction: "Inflow", delta: "-4%" },
  { asset: "BTC", type: "Crypto", amount: "126 BTC", direction: "Outflow", delta: "+9%" },
  { asset: "USDC", type: "Crypto", amount: "$6.1M", direction: "Inflow", delta: "+31%" }
];

const activity = [
  {
    id: "TT-78491",
    counterpart: "Apogee Games",
    payload: "$145,000 → BTC",
    settlement: "Lightning",
    status: "Confirmed 2/2",
    timestamp: "07:32 UTC"
  },
  {
    id: "TT-78422",
    counterpart: "Saturn Commerce",
    payload: "250,000 USDC → €",
    settlement: "SEPA Instant",
    status: "Released",
    timestamp: "07:05 UTC"
  },
  {
    id: "TT-78414",
    counterpart: "Zephyr Labs",
    payload: "€920,000",
    settlement: "FedNow",
    status: "Queued",
    timestamp: "06:48 UTC"
  },
  {
    id: "TT-78399",
    counterpart: "Orbital Capital",
    payload: "52 BTC",
    settlement: "Lightning",
    status: "Settled",
    timestamp: "05:33 UTC"
  }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-night">
      <header className="border-b border-night/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-10 py-6">
          <div className="flex flex-col gap-1">
            <span className="tagstrip">
              <span className="h-px w-8 bg-night/50" />
              Arcadia PSP Command Deck
              <span className="h-px w-8 bg-night/20" />
            </span>
            <h1 className="text-3xl tracking-[0.08em] uppercase">Settlement Control</h1>
          </div>
          <div className="flex items-center gap-10 text-xs tracking-[0.24em] uppercase text-night/60">
            <div className="flex flex-col items-end text-right">
              <span>Operator</span>
              <span className="text-night">Helena M., Head of Treasury</span>
            </div>
            <button className="primary">Initiate Transfer</button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-[1.7fr_1fr] gap-10 px-10 py-10">
        <div className="flex flex-col gap-10">
          <section className="surface grid grid-cols-[1.2fr_1fr] border-night/10">
            <div className="border-r border-night/10 p-8">
              <div className="section-title">Live Liquidity</div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.32em] text-night/40">Total Reserves</div>
                  <div className="text-4xl tracking-[0.04em]">$12.45M</div>
                </div>
                <div className="flex flex-col gap-2 text-right text-xs uppercase tracking-[0.24em] text-night/50">
                  <span>Fiat {"<"}→ Crypto Ratio</span>
                  <span className="text-night">58 : 42</span>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-4 border-t border-night/10 text-xs uppercase tracking-[0.24em] text-night/60">
                {assetBreakdown.map((asset) => (
                  <div key={asset.asset} className="border-r border-night/10 p-4 last:border-r-0">
                    <div className="text-night text-sm tracking-[0.16em]">{asset.asset}</div>
                    <div className="mt-2 text-night/80">{asset.type}</div>
                    <div className="mt-4 text-night text-base tracking-[0.08em]">{asset.amount}</div>
                    <div className="mt-2 text-night/50">{asset.direction}</div>
                    <div className="mt-2 text-xs text-accent">{asset.delta}</div>
                  </div>
                ))}
              </div>
            </div>
            <aside className="p-8">
              <div className="section-title">Compliance Markers</div>
              <div className="mt-6 flex flex-col gap-5 text-xs tracking-[0.22em] uppercase text-night/60">
                <div className="flex justify-between">
                  <span>KYT Signals</span>
                  <span className="text-night">Nominal</span>
                </div>
                <div className="flex justify-between">
                  <span>Chainlink Oracles</span>
                  <span className="text-night">Synced</span>
                </div>
                <div className="flex justify-between">
                  <span>Liquidity Coverage</span>
                  <span className="text-night">104%</span>
                </div>
                <div className="flex justify-between">
                  <span>FX Clock</span>
                  <span className="text-night">H : 07 UTC</span>
                </div>
              </div>
              <div className="mt-10 space-y-6">
                <p className="text-xs leading-6 tracking-[0.06em] text-night/70">
                  Counterparty risk is auto-balanced against stablecoin reserves. Fiat settlement windows are aligned with partner banks. Crypto rails reprice every 90 seconds.
                </p>
                <button>View Governance Protocol</button>
              </div>
            </aside>
          </section>

          <section className="surface border-night/10">
            <div className="border-b border-night/10 p-8">
              <div className="section-title">Create Transfer</div>
              <div className="mt-6 grid grid-cols-4 gap-6">
                <div className="flex flex-col gap-3">
                  <label htmlFor="from-ledger">From Ledger</label>
                  <select id="from-ledger" defaultValue="usd-corporate">
                    <option value="usd-corporate">USD Corporate</option>
                    <option value="eur-nostro">EUR Nostro</option>
                    <option value="btc-reserve">BTC Reserve</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="to-ledger">To Ledger</label>
                  <select id="to-ledger" defaultValue="btc-treasury">
                    <option value="btc-treasury">BTC Treasury</option>
                    <option value="usdc-liquidity">USDC Liquidity</option>
                    <option value="merchant-escrow">Merchant Escrow</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="amount">Amount</label>
                  <input id="amount" placeholder="$250,000" />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="rail">Settlement Rail</label>
                  <select id="rail" defaultValue="lightning">
                    <option value="lightning">Lightning</option>
                    <option value="sepa">SEPA Instant</option>
                    <option value="fednow">FedNow</option>
                    <option value="ethereum">Ethereum</option>
                  </select>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="flex flex-col gap-3">
                  <label htmlFor="window">Execution Window</label>
                  <input id="window" placeholder="07:45 UTC" />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="controls">Control Layer</label>
                  <select id="controls" defaultValue="multi-sig">
                    <option value="multi-sig">Multi-sig</option>
                    <option value="single">Single Approval</option>
                    <option value="auto">Auto-Routing</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="memo">Memo</label>
                  <input id="memo" placeholder="Treasure Sweep 07" />
                </div>
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-night/10 pt-6">
                <div className="flex gap-8 text-xs uppercase tracking-[0.24em] text-night/60">
                  <span>Fee Model: 0.12%</span>
                  <span>FX Rate Lock: 4 min</span>
                  <span>AML: Auto-cleared</span>
                </div>
                <div className="flex gap-4">
                  <button>Queue Draft</button>
                  <button className="primary">Submit Transfer</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-night/10">
              {transferTemplates.map((template) => (
                <article key={template.title} className="p-8">
                  <div className="section-title">Template</div>
                  <div className="mt-6 text-lg tracking-[0.08em] text-night">{template.title}</div>
                  <p className="mt-4 text-xs leading-6 tracking-[0.06em] text-night/70">{template.description}</p>
                  <div className="mt-6 flex flex-col gap-3 text-xs uppercase tracking-[0.24em] text-night/60">
                    <span>{template.vector}</span>
                    <span>{template.primary}</span>
                    <span>{template.secondary}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="flex flex-col gap-10">
          <section className="surface border-night/10">
            <div className="border-b border-night/10 p-6">
              <div className="section-title">Network Status</div>
            </div>
            <div className="divide-y divide-night/10">
              {networkStatus.map((entry) => (
                <div key={entry.network} className="flex items-center justify-between px-6 py-5 text-xs uppercase tracking-[0.22em] text-night/60">
                  <div className="flex flex-col">
                    <span className="text-night">{entry.network}</span>
                    <span>{entry.window}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-night">{entry.status}</span>
                    <span>{entry.latency}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="surface border-night/10">
            <div className="border-b border-night/10 p-6">
              <div className="section-title">Activity Feed</div>
            </div>
            <div className="divide-y divide-night/10">
              {activity.map((item) => (
                <article key={item.id} className="grid grid-cols-[1.1fr_1fr] gap-6 px-6 py-6 text-xs uppercase tracking-[0.22em] text-night/60">
                  <div className="flex flex-col gap-3">
                    <span className="text-night">{item.id}</span>
                    <span>{item.counterpart}</span>
                    <span>{item.payload}</span>
                  </div>
                  <div className="flex flex-col gap-3 text-right">
                    <span>{item.settlement}</span>
                    <span className="text-night">{item.status}</span>
                    <span>{item.timestamp}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="surface border-night/10 p-6">
            <div className="section-title">Risk Signals</div>
            <div className="mt-6 flex flex-col gap-4 text-xs uppercase tracking-[0.22em] text-night/60">
              <div className="flex justify-between">
                <span>Exposure Threshold</span>
                <span className="text-night">72% utilization</span>
              </div>
              <div className="flex justify-between">
                <span>Volatility Buffer</span>
                <span className="text-night">18% headroom</span>
              </div>
              <div className="flex justify-between">
                <span>Stablecoin Drift</span>
                <span className="text-night">Within guardrails</span>
              </div>
              <div className="flex justify-between">
                <span>Settlement Alerts</span>
                <span className="text-night">0 pending escalations</span>
              </div>
            </div>
            <div className="mt-8 space-y-4 text-xs leading-6 tracking-[0.06em] text-night/70">
              <p>Crypto drawdown triggers automated fiat injections when utilization exceeds 84%. Lightning channels are rebalanced every 22 minutes to maintain throughput.</p>
              <button>Override Risk Profile</button>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
