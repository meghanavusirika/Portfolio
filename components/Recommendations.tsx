export default function Recommendations() {
  return (
    <section id="recommendations" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Recommendations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What my supervisors and colleagues say about my work
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-full p-4 text-white flex-shrink-0">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Alfredo Calara
                  </h3>
                  <p className="text-lg text-primary-600 font-semibold mb-1">
                    Senior Information Technology Project Manager
                  </p>
                  <p className="text-gray-600 text-sm">
                    New Haven Mortgage Corporation
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed italic">
                    "I currently supervise Meghana in her role as an IT Assistant intern at New Haven Mortgage. Since joining us, she has shown steady growth in both technical and professional skills. Meghana is a quick learner who actively applies feedback and takes initiative when faced with new challenges. She is developing her troubleshooting skills, regularly assisting with minor software issues, and gaining hands-on experience in day-to-day IT operations. One of her key projects is building a Mortgage Calculator Chatbot, where she's applying both front-end and back-end development using JavaScript and Python. Meghana continues to build confidence and capability, and I'm glad to recommend her for junior roles in IT or software development as she progresses in her career."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
