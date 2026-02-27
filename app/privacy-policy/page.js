
export default function PrivacyPolicy(){
  return (
    <section className='bg-white text-black max-h-screen w-full md:max-w-3/5 mx-auto my-4 md:my-10 p-4 md:p-16 relative overflow-y-scroll'>
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Privacy Settings & User Controls</h1>
         <p className="mt-2 text-md">BLU is committed to empowering users with control over their visibility and interactions.</p>
         <p className="mt-2 text-md">Users may configure privacy settings within the app, including:</p>
      </header>

      <div className="space-y-8 text-base leading-relaxed">
        {/* 1 */}
        <div>
          <h2 className="text-2xl font-bold my-4">
            1. Profile Visibility
          </h2>
          <p className="mb-4">Users may choose:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Public Profile (visible to all users)</li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-2xl font-bold my-4">
            2. Event Participation Visibility
          </h2>
          <p className="mb-4">Users may control:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Whether their attendance is publicly displayed</li>
            <li>Whether they appear in “Entered” event lists</li>
            <li>Whether they appear in Maps</li>
          </ul>

          <p className="mb-4">Private events are only by invitations or by search.</p>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-2xl font-bold my-4">
            3. Location Controls
          </h2>
          <p className="mb-4">Users may:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Enable precise location</li>
            <li>Enable approximate location</li>
          </ul>
          <p className="mb-4">Disabling location may limit app usage.</p>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-2xl font-bold my-4">
            4. Messaging Controls
          </h2>
          <p className="mb-4">Users may choose:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Event participants only</li>
            <li>Direct messages</li>
            <li>Create group message</li>
          </ul>

          <p className="mb-4">Users may block or report other users at any time.</p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-2xl font-bold my-4">
            5. Data Access & Deletion
          </h2>
          <p className="mb-4">Users may:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Request deletion of account and associated data</li>
          </ul>

          <p className="mb-4">Deletion requests may take up to 30 days to process, subject to legal obligations.</p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-2xl font-bold my-4">
            6. Analytics & Demographic Insights
          </h2>
          <p className="mb-4">BLU may provide aggregated demographic insights to event hosts.
            These insights:</p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Do not reveal personal identities</li>
            <li>Are anonymized</li>
            <li>Are used for improving event experiences</li>
          </ul>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-2xl font-bold my-4">
            7. Safety & Moderation
          </h2>
          <p className="mb-4">BLU reserves the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Remove harmful content</li>
            <li>Investigate reported behavior</li>
            <li>Cooperate with law enforcement when required</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
