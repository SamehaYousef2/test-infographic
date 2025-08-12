"use client";

import { motion } from "framer-motion";
import {
  Calendar, Clock, MapPin, LineChart, AlertTriangle, Cog, Camera,
  Sparkles, Bot, Users, CheckCircle2, ChevronRight, Mail, Link as LinkIcon
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                AI & Predictive Workshops — Air Cargo
              </h1>
              <p className="mt-2 text-slate-600 max-w-2xl">
                Shape our next wave of data-driven decision-making. We’re gathering business requirements
                for practical AI & predictive use cases—then turning them into a prioritized, deliverable roadmap.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="badge">Executive & Manager Friendly</span>
              <span className="badge">Hands‑on & Outcome‑focused</span>
            </div>
          </div>

          {/* Logistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-2">
            <div className="card p-4 flex items-center gap-3">
              <Calendar className="h-5 w-5" />
              <div>
                <div className="kicker">Date</div>
                <div className="font-medium">Add your date here</div>
              </div>
            </div>
            <div className="card p-4 flex items-center gap-3">
              <Clock className="h-5 w-5" />
              <div>
                <div className="kicker">Time</div>
                <div className="font-medium">e.g., 10:00–12:00</div>
              </div>
            </div>
            <div className="card p-4 flex items-center gap-3">
              <MapPin className="h-5 w-5" />
              <div>
                <div className="kicker">Location</div>
                <div className="font-medium">Add your venue or Teams link</div>
              </div>
            </div>
            <div className="card p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LinkIcon className="h-5 w-5" />
                <div>
                  <div className="kicker">RSVP</div>
                  <div className="font-medium">Insert link / QR</div>
                </div>
              </div>
              <button className="btn">Sign up</button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Row 1: Why + BI vs AI */}
      <section className="mx-auto max-w-6xl px-6 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Why this workshop */}
          <div className="card p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Why this workshop</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="list-bullet"><ChevronRight />Gather business requirements for AI & predictive use cases that matter.</li>
              <li className="list-bullet"><ChevronRight />Align on <span className="font-medium">BI vs AI</span> so everyone speaks the same language.</li>
              <li className="list-bullet"><ChevronRight />Prioritize quick wins and define a realistic delivery plan.</li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <Users className="h-4 w-4" />Commercial, Operations, Finance, and IT/BI are all encouraged to join.
            </div>
          </div>

          {/* BI vs AI at a glance */}
          <div className="card p-6 md:col-span-2">
            <div className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              <h2 className="text-lg font-semibold">BI vs AI at a glance</h2>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-4">
                <span className="badge mb-2">Business Intelligence (BI)</span>
                <p className="text-sm text-slate-700">
                  Describes and diagnoses the past and present to support decisions.
                </p>
                <ul className="mt-3 text-sm text-slate-700 space-y-2 list-disc list-inside">
                  <li>Route performance dashboards (LF, yield, OTP)</li>
                  <li>Revenue & cost breakdowns by lane or product</li>
                  <li>Drill‑downs, filters, and KPI tracking</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-4">
                <span className="badge mb-2">Artificial Intelligence (AI/ML)</span>
                <p className="text-sm text-slate-700">
                  Predicts, detects, and optimizes what happens next—often automating actions.
                </p>
                <ul className="mt-3 text-sm text-slate-700 space-y-2 list-disc list-inside">
                  <li>Forecast demand/revenue to adjust capacity & pricing</li>
                  <li>Detect booking or milestone anomalies early</li>
                  <li>Optimize load plans, ULD/crew allocation, and routing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2: What is AI for us */}
      <section className="mx-auto max-w-6xl px-6 py-2">
        <div className="card p-6">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            <h2 className="text-lg font-semibold">What is AI (for us)</h2>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl border p-4">
              <div className="flex items-center gap-2"><LineChart className="h-5 w-5"/><h3 className="font-medium">Forecasting</h3></div>
              <p className="mt-2 text-sm text-slate-700">Predict volumes, revenue, and load factor by route/time to plan capacity and pricing.</p>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="flex items-center gap-2"><AlertTriangle className="h-5 w-5"/><h3 className="font-medium">Anomaly Detection</h3></div>
              <p className="mt-2 text-sm text-slate-700">Spot unusual dips in bookings, revenue, or milestone delays before they escalate.</p>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="flex items-center gap-2"><Cog className="h-5 w-5"/><h3 className="font-medium">Optimization</h3></div>
              <p className="mt-2 text-sm text-slate-700">Create fuel‑ and space‑efficient load plans; optimize ULD, crew, and routing decisions.</p>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="flex items-center gap-2"><Camera className="h-5 w-5"/><h3 className="font-medium">Computer Vision</h3></div>
              <p className="mt-2 text-sm text-slate-700">Detect damaged, unsafe, or mislabelled cargo from photos/video to reduce risk.</p>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="flex items-center gap-2"><Sparkles className="h-5 w-5"/><h3 className="font-medium">Generative AI</h3></div>
              <p className="mt-2 text-sm text-slate-700">Draft rate offers, customer emails, SOPs, and campaign content from your data.</p>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="flex items-center gap-2"><Bot className="h-5 w-5"/><h3 className="font-medium">Agents</h3></div>
              <p className="mt-2 text-sm text-slate-700">Always‑on assistants that monitor metrics, decide, and trigger workflows or alerts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Row 3: What you'll get / Who should attend */}
      <section className="mx-auto max-w-6xl px-6 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <h2 className="text-lg font-semibold">What you’ll get</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="list-bullet"><ChevronRight />A <span className="font-medium">prioritized backlog</span> of AI & predictive use cases (with value/effort).</li>
              <li className="list-bullet"><ChevronRight />Example <span className="font-medium">mockups</span> for key use cases (dashboards, alerts, or flows).</li>
              <li className="list-bullet"><ChevronRight />A <span className="font-medium">90‑day delivery plan</span> with owners, data sources, and next steps.</li>
            </ul>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Who should attend & what to bring</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="list-bullet"><ChevronRight />Leads from Commercial, Operations, Finance, and IT/BI.</li>
              <li className="list-bullet"><ChevronRight />Your key <span className="font-medium">KPIs</span>, pain points, and current reports.</li>
              <li className="list-bullet"><ChevronRight />Known <span className="font-medium">data sources</span> and any constraints.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="border border-dashed rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-700">
            <Mail className="h-5 w-5" /><span>Contact: yourname@company.com</span>
          </div>
          <div className="text-xs text-slate-500">Add your brand colors & logo before sending.</div>
        </div>
      </section>
    </div>
  );
}
