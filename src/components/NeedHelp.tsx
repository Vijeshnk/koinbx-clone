const helpLinks = [
  {
    title: "24/7 Customer Support",
    desc: "Our dedicated customer support is always happy to assist you!",
    link: "https://koinbxsupport.freshdesk.com/support/tickets/new",
    linkText: "Raise a Ticket"
  },
  {
    title: "FAQ",
    desc: "View FAQs for detailed instructions on specific features.",
    link: "https://koinbxsupport.freshdesk.com/support/solutions",
    linkText: "Know More"
  },
  {
    title: "Blog", 
    desc: "Stay up to date with the latest stories and updates.",
    link: "/blog",
    linkText: "View More"
  }
];

const NeedHelp = () => (
  <div className="MuiBox-root mb-5 pb-5">
    <section className="clshelp-section bg-gray-50 dark:bg-gray-900 py-16">
      <div className="clscontainer max-w-7xl mx-auto px-4">
        <h2 className="clscommon-title text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Need Help?
        </h2>
        
        <div className="clshelp-box-block">
          <div className="row grid grid-cols-1 md:grid-cols-3 gap-8">
            {helpLinks.map((item, index) => (
              <div key={index} className="col-sm-12 col-lg-4">
                <div className="clshelp-box bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <h6>
                    <a 
                      href={item.link}
                      target={item.link.startsWith('http') ? "_blank" : undefined}
                      rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      {item.linkText}
                    </a>
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default NeedHelp;
