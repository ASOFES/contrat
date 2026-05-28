window.BMK_CONTENT_EN = {
  title: "Unified Master Dossier - BMK",
  clientName: "Societe BMK",
  clientContact: "+243 820 001 470 / +243 852 554 135",
  projectAmount: 1700,
  designScope: `Unified Master Dossier
Project: Integrated management system for a modern joinery business
(functional version, non-technical, without code)
________________________________________
1) Context and vision
The company wants to manage the full lifecycle of a customer order in one system, from sales to delivery/installation, with:
- real-time stage tracking,
- deadline control,
- stock management linked to production,
- financial tracking (deposit/balance),
- customer portal for progress follow-up.
________________________________________
2) Project objectives
- Centralize all order information.
- Prevent information loss between sales, factory, stock, and finance.
- Give customers clear visibility on their case.
- Measure real progress accurately (completed quantities).
- Produce reliable end-of-day reports (stock + finance).
________________________________________
3) Global scope
Included
- Customers, quotations, orders
- Customer approval + payment
- Technical measurement validation
- Cutting list
- Cutting, edging, factory assembly
- Delivery and on-site installation
- Stock management (requests/outflow/remaining)
- Finance (collections, balances, reports)
- Stage comments/chat
- History/archive
- Customer portal
Excluded (later phase)
- HR payroll
- Full legal accounting
- Public e-commerce
- Complex multi-company setup
________________________________________
4) User roles
- Admin
- Sales representative
- Surveyor / Technical
- Factory manager
- Cutting operator
- Edging operator
- Factory assembler
- Delivery agent
- On-site installer
- Storekeeper
- Accountant / Finance
- Customer (viewing only own order)
________________________________________
5) Full business workflow (official order)
1. Sales / quotation
2. Customer acceptance
3. Payment (100% or 70% deposit)
4. Technical measurements validated
5. Cutting list
6. Cutting (panel cutting)
7. Edging (edge finishing)
8. Factory assembly
9. Delivery
10. Customer-site installation
11. Reception
12. Closure and archiving
________________________________________
6) Mandatory data per order
Customer information
- Name
- Phone
- Worksite/delivery address
Order information
- Unique order number
- Model (standard or custom)
- Materials (wood, granite, marble, etc.)
- Color
- Dimensions (volume, diameter, etc.)
- Design / reference images
- Quotation
- Promised delivery timeline
________________________________________
7) Mandatory operational tracking by stage
Each stage must store:
- planned quantity
- completed quantity
- planned start date
- planned end date
- actual start date
- actual end date
- owner
- status (to do, in progress, completed, blocked, delayed)
- progress note
Example: Cutting planned 15 pieces, completed 5 then 10 then 15.
________________________________________
8) Deadline and delay management
- Each stage has a planned timeline.
- The system compares planned vs actual automatically.
- If exceeded: delayed status.
- In case of delay:
- reason is mandatory,
- new estimated date is mandatory,
- immediate internal notification,
- customer notification according to communication rules.
________________________________________
9) Customer portal
When quotation is accepted:
- customer account is created automatically,
- customer logs in to track order,
- sees stages and current status,
- sees validated documents (quotation, payment, delivery, reception),
- receives official updates.
________________________________________
10) Factory production (expected details)
Cutting list
- analyze requested model,
- simulate required parts,
- define exact dimensions,
- estimate number of boards and accessories.
Workshop execution
- Cutting,
- Edging,
- Factory assembly (design/assembly control).
________________________________________
11) Stock and store
- Cutting list automatically generates material needs:
- boards,
- handles,
- hinges,
- other accessories.
- A stock-out request is generated.
- Storekeeper prepares and validates release.
- Stock is updated (outflow and remaining).
- End-of-day warehouse report:
- total inputs,
- total outputs,
- remaining stock.
________________________________________
12) Finance and operational accounting
- Collection tracking linked to orders:
- deposit,
- full payment,
- remaining balance.
- Daily cash/bank journal.
- End-of-day finance report:
- daily sales,
- daily collections,
- outstanding payments,
- paid/unpaid orders.
________________________________________
13) Chatbox and comments at each level
Each stage includes:
- discussion thread,
- author + timestamp,
- attachments (photos/documents),
- preserved history.
Two channels:
- internal (teams),
- customer (approved messages).
________________________________________
14) Core business rules
- Unique order number is mandatory.
- Quotation acceptance = customer account creation.
- No stage skipping without admin authorization.
- Stock-out is mandatory for material consumption.
- Collection not linked to an order is forbidden.
- Delay without justification is forbidden.
- History cannot be deleted.
________________________________________
15) Expected dashboards
- Management: ongoing orders, delays, revenue, alerts.
- Factory: workload by stage (cutting/edging/assembly).
- Stock: pending requests, outflows, potential shortages.
- Finance: collections, balances, unpaid items.
- Customer: own order progress only.
________________________________________
16) Acceptance criteria
System is validated if:
1. An order can flow from sales to closure without break.
2. Customer tracks their order autonomously.
3. Cutting/edging/assembly stages show planned vs completed.
4. Stock outputs follow cutting list.
5. Collections are visible in finance.
6. End-of-day reports are available.
7. Delays are tracked and justified.
8. Role permissions are respected.
17) Deployment plan (batches)
Batch 1 (4-6 weeks)
- Customer, quotation, order, payment, base stage tracking, simple customer portal.
Batch 2 (4-6 weeks)
- Cutting list, cutting, edging, factory assembly, stock store.
Batch 3 (3-5 weeks)
- Delivery, on-site installation, advanced finance, dashboards, full comments/chat.
________________________________________
18) Risks and control measures
- Incomplete measurements -> mandatory field checklist.
- Delays not reported -> auto "delayed" status + mandatory note.
- Stock shortage -> reserve material once cutting list is validated.
- Poor role separation -> strict roles/permissions.
- Low adoption -> profile-based training.
________________________________________
19) RACI summary
- Management: validates framework and arbitrations.
- Sales: handles quotation/order.
- Technical: validates measurements and constraints.
- Factory manager: drives production.
- Cutting/Edging/Assembly: execute and report progress.
- Storekeeper: prepares and validates stock releases.
- Delivery agent: executes delivery.
- Finance: records collections and reports.
- Customer: tracks and confirms reception.
________________________________________
20) Governance and signatures
- Weekly steering meeting.
- End-of-batch validation via formal minutes.
- Change management via formal requests.
- Training before go-live.
Recommended signatories:
- Management
- Factory manager
- Finance lead
- Project lead`,
  contractTerms: `SERVICE AGREEMENT (Template)
Between the undersigned:
- Provider: [toto MULUMBA / company / ASOFES], [Maman Yemo 267], [Phone: 0995178105], [totoasofes22@gmail.com]
- Client: [CEO / company: BMK], [Address: De la revolution], [Phone: +243 820 001 470 / +243 852 554 135], [Email:                         ]
The following is agreed:
Article 1 - Purpose
The provider agrees to design and deliver a management application for modern joinery (sales, production, stock, finance, customer portal), according to the batches defined in the attached specification.
Article 2 - Duration
Estimated duration: 4 to 5 weeks from project start date.
Article 3 - Scope and batches
The project is split into 3 batches with successive deliveries and client validation at the end of each batch.
Article 4 - Project price
Total development amount: 1,700 USD
- Batch 1: 750 USD
- Batch 2: 375 USD
- Batch 3: 375 USD

Article 5 - Payment terms
- 50% at signature: 750 USD
- 25% after Batch 1 validation: 375 USD
- 25% at final delivery: 375 USD
Any validated work outside the agreed scope will be billed through an additional quotation.
Article 6 - Maintenance and hosting
- Corrective maintenance and support: 150 USD / month
- Hosting: 50 USD / month
- Total recurring monthly fee: 200 USD / month
Article 7 - Included in maintenance
- bug fixing,
- reasonable user support,
- minor adaptations (non-structural).
Article 8 - Not included in maintenance
- major new features,
- complete UI/UX redesign,
- new third-party integrations,
- unplanned scope extensions. These items are billed through separate quotation.
Article 9 - Client obligations
The client commits to:
- provide business information and validations on time,
- appoint a main point of contact,
- validate or comment each batch within 3 to 5 business days.
Article 10 - Acceptance and validation
Each batch is validated through demo + acceptance report.
Without blocking feedback within 5 business days, the batch is considered accepted.
Article 11 - Intellectual property
Ownership of the delivered solution is transferred to the client after full project payment.
Article 12 - Confidentiality
Both parties commit to keep all exchanged data and information confidential.
Article 13 - Termination
In case of early termination, already completed and validated work remains due proportionally.
Article 14 - Disputes
In case of dispute, both parties shall prioritize amicable settlement before legal action.
Done at [City], on [Date]
Signatures:
- Provider: Toto asofes
- Client: Societe BMK`
};
