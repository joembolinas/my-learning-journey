# WEEK 5 LEARNING MATERIALS

# Expectations

Now that Milestone 1 presentation is over, you have surely gained insights on what approach can be better taken if you want to fully address the needs of your client. Continue revising your work according to your mentor’s feedback. Focus on revising your Milestone 1 output based on the feedback and insights gathered during the synchronous session, consultation sessions, and/or peer feedback.

As you use this guide, do the following:

1. Take note of any concept, topic, or terminology that is confusing, unclear, and/or unfamiliar to you. Conduct internet research, post a message and interact with your peers on your decided class platform, or schedule a mentoring session.
2. Manage your time wisely so you can complete the readings and/or activities in Camu before your next synchronous session.

# Expected Output

This week, you’re officially submitting your first iteration based on your current progress. This is not graded as MS 1, but the changes you’ll implement here will affect the success of your MS 2, which is your actual implementation of your MS 1. You will also need to revisit your project through a project management check-in, where your group will update the shared PM sheet, identify key assignments’ performance, set timelines for the new milestone, and align your targets to ensure your team stays on track. enhancing both the quality and alignment of your work with your team’s goals.

You are expected to complete the following tasks by the end of the week. Take note of the ones that are required to be submitted on Camu.

1. Revise Milestone 1.
2. Check common potential issues of the proposed design.

# -DISCUSSION

# What are key considerations in improving MS 1?

A. Building Robust Platforms

In the ever-evolving world of digital platforms — from e-commerce sites and learning management systems to mobile banking apps — building something that “just works” isn’t enough. Platforms must be robust. That means they should be able to grow with user demand (scalability), recover from unexpected issues (error handling), run efficiently even with heavy use (performance optimization), and stay reliable even when things go wrong (resilience). For MMDC learners, this isn’t just theory — you’re going to build systems that handle real users, real money, and real stakes. Whether you're coding a back-end service, setting up a network, or working with analytics pipelines, these principles apply.

Have a short review of the key items your project must cover. Note that all these were also discussed in your previous weeks, but it pays to have a shorter version during review, right? Check out the items below and see what your team may have missed as you were doing your diagram:

1. Scalability means that a system can handle more users or data without crashing or slowing down significantly. Imagine you're part of a team that builds a mobile payment app for sari-sari stores across the country. At first, it served 500 users, but after a TikTok video of you goes viral, you suddenly have 50,000 users in one week. If your app was built for a small load only, it might fail. A scalable platform anticipates this and is designed to expand — by using tools like cloud-based infrastructure (e.g., AWS or GCP), load balancers, and microservices. You’ve taken these items in the previous weeks, so these concepts should not be foreign to you.
2. Performance Optimization focuses on speed and efficiency. Platforms must deliver fast results, even during peak hours. In the Philippines, where internet speed may vary by area, systems that run slow can cause frustration — especially for users accessing e-Gov services or online classrooms. Performance tuning may include caching, database indexing, and optimizing algorithms to reduce processing time.
3. Resilience is the ability of a system to keep running smoothly even when something breaks. It’s different from just “avoiding failure” — it’s about recovering gracefully when failure happens. This might mean rerouting traffic from a failed server to a backup one or having retry mechanisms if a database temporarily goes down. A resilient system avoids total shutdown and minimizes user impact.

If you're developing a delivery app like Lalamove or a video streaming platform like iWantTFC, you'll have to ensure your system is prepared for sudden spikes in demand — especially during holidays or nationwide promos. Network engineers will ensure load balancing and failover systems are in place. Backend developers will have to ensure retry logic and circuit breakers for APIs. QA testers will simulate failure scenarios before launch.

Remember this: Robustness is a team effort — and everyone contributes. This is why as early as now, while you are still a student, you are expected to navigate through collaborative concerns because in reality, everything is a product and process with others. Even if you are a freelancer, you’ll still have clients – and obviously, that is still working with others. Business owner? You’ll work with employees, partners, and customers. While it seems easy to drop from your group whenever there are collaborative issues, in practice, you cannot force a non-functional colleague to resign. You can't always micromanage, too. Just like the systems you’re building, people relations also need harmony. It does not have to be uniform, but it has to be in harmony with what you want to achieve.

Consider the use cases below as further examples as you pinpoint the pain points you failed to address using your diagrams. Below each case is an AI-powered feedback which you may challenge if you see it’s not fitting to your context:

Case 1: Business Setting – Scalable Restaurant App

You are hired by a startup that created a food ordering app for local restaurants. Initially, they serve only Makati, with 100 daily users. Suddenly, after a partnership with Grab Kitchen, the user base jumps to 5,000 a day.

Your challenge: The app’s database was hosted on a small single server. Orders are delayed, some don’t push through, and customer service is overwhelmed.

Your proposed solution:

1. You migrate the backend to a scalable cloud environment (e.g., Firebase, AWS EC2 with autoscaling).
2. You set up API rate limits to prevent overload.
3. You add caching for frequent queries like “menu items” or “store hours.”
4. You implement error reporting tools like Sentry to track problems in real-time.
5. Error Handling is how a system reacts when things go wrong — and things will go wrong. This includes invalid user inputs, server crashes, internet connection loss, or even incorrect data formats. For example, if a user uploads a corrupted file, your app shouldn’t crash; instead, it should show a friendly error message and let the user try again. Robust error handling makes sure errors are logged, reported, and resolved, not ignored or hidden.

AI Feedback on your Proposed Solution:

1. Migrating to a Scalable Cloud Environment

Strengths: Migrating the backend to a cloud environment like Firebase or AWS EC2 is an excellent step. Both options provide autoscaling capabilities, ensuring that your infrastructure grows with the increased traffic. AWS EC2 with autoscaling offers more customization and control, which is great for future scaling as the app grows. Firebase, on the other hand, could offer a more straightforward solution for real-time data syncing and simpler management.

Room for Improvement: Make sure you conduct a proper cost analysis and choose the appropriate instance types. Cloud solutions can scale easily, but they also come with variable costs. It's important to predict potential spikes in traffic and set up budget alarms to avoid unexpected expenses.

2. Setting up API Rate Limits

Strengths: API rate limiting is a great way to prevent server overload. It’s crucial for managing high traffic, ensuring that each user request is processed without bringing down the system. This will help prevent the system from getting overwhelmed during peak hours.

Room for Improvement: In addition to rate limits, consider implementing backpressure mechanisms such as queuing or throttling for certain types of requests (e.g., order submissions). Also, make sure to provide clear error messages to users when rate limits are reached, so they don't get frustrated.

3. Caching for Frequent Queries

Strengths: Caching is an essential technique to reduce database load. Frequently requested data, such as menu items or store hours, should definitely be cached to speed up response times. You can use Redis or Memcached for this purpose, which are highly efficient in handling high-frequency queries.

Room for Improvement: Ensure that cache invalidation strategies are in place—e.g., when the menu changes, the cached data should be refreshed. Also, consider implementing a CDN (Content Delivery Network) to cache static content like images and menus for faster access by users across different locations.

4. Implementing Error Reporting Tools (Sentry)

Strengths: Integrating real-time error tracking with a tool like Sentry is a smart choice. It will help you quickly identify and address any issues that arise during the user experience. Real-time tracking can significantly improve system reliability and responsiveness, which is essential in a growing business.

Room for Improvement: Ensure that your error reporting solution is comprehensive. For example, in addition to Sentry, you might want to use logging tools (like ELK stack or Datadog) to capture detailed logs, enabling a deeper dive into the app’s performance and tracing problems to their root causes. Also, don't forget about monitoring user actions that might lead to these errors, so you can proactively solve potential issues.

Overall Feedback:

You’ve proposed a strong set of solutions that address the immediate problem of scaling, reducing overload, and improving app reliability. However, it's also important to plan for monitoring the long-term scalability of the system. As traffic continues to increase, factors such as database sharding, load balancing, and further architectural improvements (e.g., microservices) might need to be considered.

What would have been your response? Are the suggestions reasonable or are they forced? Notice how error handling is also included here. Would you also conisder including it in your revisions?

Case 2: Government or Civic Tech Setting – Resilient LGU Reporting System

You’re working with a local government unit (LGU) in Bicol that wants to digitize barangay-level reporting (e.g., flood reports, road blockages). The system is used mostly during storms — when power and the internet are unstable.

Your challenge: The platform needs to stay available during high-risk periods with poor connectivity.

Your proposed solutions:

1. You add offline functionality where users can report incidents via SMS or save them locally for auto-sync when online.
2. You add redundancy by hosting the system on two cloud servers in different regions.
3. You create fallback APIs that store reports in a message queue when the main database is unreachable, to be processed later.

AI Feedback on your Proposed Solution:

1. Adding Offline Functionality (SMS and Local Storage)

Strengths: Implementing offline functionality for SMS reporting and local storage is a smart approach. During storms or power outages, mobile signals are often more stable than internet connectivity, and SMS is widely accessible. By allowing users to report incidents offline and saving data locally for later syncing, you ensure that important reports aren't missed.

Room for Improvement: In addition to SMS, you could consider integrating Progressive Web Apps (PWAs). These apps can function offline by storing data locally and syncing once connectivity is restored, offering a more user-friendly interface than SMS. PWAs are lightweight and don't require installation from app stores, which can be beneficial in resource-constrained areas. Also, ensuring the local storage solution uses encrypted formats is vital to protect sensitive data before syncing.

2. Redundancy with Cloud Servers in Different Regions

Strengths: Hosting the system on multiple cloud servers in different regions for redundancy is an excellent strategy. It ensures that if one region goes down due to connectivity or power failure, the other region can continue functioning, minimizing downtime. This is particularly important for disaster management systems where timely data is crucial.

Room for Improvement: When setting up multi-region redundancy, it’s important to choose regions that are geographically distant but still close enough to provide low-latency failover when needed. Additionally, consider using load balancers across regions to distribute the traffic evenly and enhance system performance. It's also essential to monitor the replication process between servers to ensure data consistency and reliability.

3. Fallback APIs and Message Queues

Strengths: The idea of creating fallback APIs and using a message queue to store reports when the main database is unreachable is a sound strategy. This ensures that even when the database is temporarily down, reports are not lost but rather queued for later processing, which is critical for a system where continuous data submission is necessary.

Room for Improvement: Make sure that the message queue system you implement is scalable and fault-tolerant (e.g., using Kafka or RabbitMQ) to handle large amounts of data during high-stress periods. It’s also important to have a priority-based system within the queue in case certain reports (e.g., emergency flood reports) need to be processed more urgently than others. Consider implementing dead-letter queues as well to handle failed messages that need manual intervention.

Additional Considerations:

Power Backup Solutions: Since power instability is a concern, consider integrating uninterruptible power supplies (UPS) for servers or devices in critical areas, such as barangay halls or reporting stations.

Security and Data Integrity: Ensure that all reports are transmitted securely, even when offline, by encrypting data before it is stored locally and when it’s sent for syncing. During storms, when connectivity is restored, security protocols should still be in place to avoid tampering or loss of data.

Overall Feedback:

This solution is a solid start and addresses the key challenges of the platform: offline functionality, redundancy, and ensuring system availability during poor connectivity. However, it would be beneficial to include a broader approach to monitoring, alerting, and automating recovery in case of failover events. Ensuring a user-friendly experience (even offline) will also be key to adoption. You’ve done a great job considering the reliability and continuity of the system under real-world conditions—keep pushing for more innovative solutions that can adapt to rapidly changing environments like storms.

What would have been your response? Are the suggestions reasonable or are they forced?

Have you tried running your core diagram and solutions to an AI? There’s no harm in having a conversation with these trained AIs. As long as you do the critical and it does the clerical, you should be fine! These are power tools that will lift the load off your shoulders so you can focus on the more novel kinds of issues. Of course, it should be a given that using these tools presuppose that you can also do the same thing you are asking it to do. After all, you won't be able to validate anything if you do not know what you are looking for.

As an IT major, remember: real platforms are never perfect — but they must be prepared. You will design systems that must scale up, recover from errors, stay fast, and survive outages. Robustness isn't a bonus feature — it’s a baseline expectation in every serious platform. Whether you're writing code, designing infrastructure, or analyzing system load, these principles will guide you to build tech that works — not just in theory, but in the real world.

B. Cross-Specialization Integration

In modern IT systems, no one works in a vacuum. A software developer might build the core logic of a system, but that code has to work with a database managed by a data engineer, a network designed by a systems admin, and analytics dashboards created by a data analyst. This interconnectedness is what we call cross-specialization integration. It means combining the work of different IT specialists — applications, network infrastructure, and data flows — into a single, functioning platform. In the Philippines, local businesses, government systems, and even schools often use multi-system platforms — like integrated HR and payroll, online enrollment portals, or city-wide emergency alert networks. If these systems don’t talk to each other properly, even the most brilliant individual components can fail.

Similar to the previous item, have a cursory review of the key items you should have considered in building your diagrams:

1. A module is a self-contained piece of a program that performs a specific function — like user login, inventory tracking, or sending SMS alerts. A single app may be made up of many modules that must interact smoothly. Poorly integrated modules can lead to bugs, data loss, or mismatched user experiences. Think of a platform where the registration page and login system aren’t synchronized — users register successfully but can’t log in.
2. Networks include the infrastructure — routers, switches, firewalls, internet service — that allows communication between modules or systems. If a module is working fine on a developer’s laptop but fails when deployed, the issue may lie in the network configuration (e.g., blocked ports, DNS problems, firewall restrictions). In integrated systems, the network is the “invisible bridge” that connects everything.
3. Data pipelines are the systems that move data from one part of the platform to another, often in stages. This is especially critical in analytics and reporting. For example, a mobile app might collect sales data, send it to a data lake, and then process it using scripts or cloud functions. If the pipeline breaks at any step — say, the format changes, or the data fails validation — reports will show wrong figures, and decisions will be affected.

In any major project — whether you're working on a fintech app like GCash or a student portal like Camu— these three parts (modules, networks, data) must work in sync. In cross-functional teams, you'll need to collaborate with other specialists. Developers need to understand basic networking. Network admins need to know how their setup affects software performance. Data analysts need to be aware of how clean or complete the incoming data is. Misalignment causes delays, confusion, and unhappy users.

Consider once again the use cases below. This time, be the one to run it to any AI tools and ask whether or not the proposed solutions are aligned with what the business needs:

Case 1: Business Setting – Integrated HR and Payroll System for SMEs

You’re working with a small HR tech company that builds systems for Philippine SMEs. Your team created three modules: attendance tracking (via QR codes), leave requests, and payroll computation. Each module was built by a different sub-team. At launch, employees report that their leaves aren’t reflected in the payroll, even if they were approved.

Your challenge: The modules exist, but they’re not talking to each other in real time. The leave module doesn’t automatically update the payroll system.

Your solution:

1. Manual data entry from the leave module to the payroll system to ensure human touch.
2. Using Excel spreadsheets to track leave and payroll data, where scheduled integration every week is done.
3. Sending leave data via email to the payroll department for manual updates for personalized documentation.

What do you think of these solutions? Will they work? What does AI think of these solutions?

Case 2: Government or Civic Tech Setting – Integrated Emergency Response Platform

You’re part of a civic tech initiative developing an emergency response system for a province. The platform includes real-time weather alerts (from PAGASA), barangay-level reporting (via a mobile app), and automatic messaging to LGU officials. These modules are maintained by different technical teams: the alert system is on a cloud API, the reporting app is built in Flutter, and the messaging system runs on a legacy SMS gateway.

Your challenge: During a typhoon, the alert module works — but reports from barangays don’t get sent to officials. Upon investigation, you find out the SMS module can’t process special characters from the reporting app, causing failures in transmission.

Your solution:

1. Using the same SMS module without upgrading it to handle special characters. Instead, approximate characters (e.g., n for ñ).
2. Manually converting special characters into a basic format before sending SMS because these are isolated cases.
3. Switching to a cheaper SMS gateway to reallocate funds to something more impactful.
4. 

What do you think of these solutions? Will they work? What does AI think of these solutions?

Again, you must understand that platform success is not just about writing clean code or configuring secure networks alone — it’s about making systems work together. Modules must be well-documented and interoperable. Network setups must be planned with application and data needs in mind. Data pipelines must be monitored for accuracy, flow, and consistency. Whether you’re working for a startup or the public sector, your ability to collaborate across IT specializations will determine whether the system functions as a whole — or falls apart under pressure. Integration is not an afterthought; it's the glue that holds the digital world together.

---

# Peer Feedback on Milestone 1: Final Revisions

Similar to your pre-submission, sit again and talk about your final revisions. This should be faster than when you first did this peer evaluation. This time, do not gather feedback outside your group. Instead, focus on your group’s personal take on the revisions and of course, aim for an improved version of your MS 1.

Follow the instructions below:

1. Set a schedule this week so that your group can come up with an agreement on how to go about the revisions.
2. Refer to the rubrics used for MS 1. Which areas were identified as your weak points?
3. Assign a new person from your team to lead the MS 2 completion.
4. Update your Project Management tool to reflect the revisions that you have to perform.
5. Refer to the Camu deadlines and reflect them to your tool.
6. If you are leading MS 2, discuss with your teammates the items that need to be improved in terms of your team’s attitude, quality of work, and timeliness. Moving forward, these items must be so much better in MS 2.
7. Don’t forget to reshare your Project Management tool to your mentor by the end of the week. This must reflect your MS 2 plans.
8. As a member of the team for MS 2, express your intent if you want to drive specific areas of the project. This way, your leader won’t need to delegate the tasks but instead rely on voluntary assignments.

---

# Reflection

1. How did you modify your project to ensure it can handle increased users or data volume in the future? What specific parts of your design or architecture support this scalability?
2. What steps did you take during your revision to make sure your system continues to function correctly even when unexpected events occur (e.g., downtime, failures)? How did you test or plan for these scenarios?
3. What improvements did you apply to ensure the protection of user data and system integrity? Were there any vulnerabilities you identified and addressed during this revision?
4. How did your team communicate and coordinate during the revision process? What strategies helped you stay aligned and resolve any differences in opinion?
5. Were you able to clearly define and fulfill your role in the team? How did you support your teammates, and how did their contributions help strengthen the overall project?
