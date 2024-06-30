// components/Portfolio.jsx

export default function Portfolio() {
  const projects = [
    "Web Design",
    "Mobile Design",
    "Logo Design",
    "Web Application Development",
    "Mobile Application Development",
    "PWA Development",
  ];

  return (
    <section className="p-8">
      <h2 className="heading mb-8">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 text-white flex items-center justify-center h-48 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold">{project}</h3>
              <div className="border-b-2 border-white mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
