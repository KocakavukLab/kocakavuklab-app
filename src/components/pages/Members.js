import React from "react";
import { Link } from "react-router-dom";
import { SiGmail,SiX, SiGooglescholar, SiResearchgate } from "react-icons/si";
function Members() {
  return (
    <div className="p-4">
      <div className="text-center">
        <div className="monst-font lg:text-5xl text-3xl m-10">Our Members</div>
        <div className="monst-font justify-center lg:text-6xl md:text-3xl"></div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-16 gap-3">
        {/* Member 1 */}
        <div className="flex inset-0 justify-center items-between py-4 p-3">
          <div class="max-w-sm rounded shadow-2xl ">
            <div className="align-center px-12">
              <img
                class="h-56 w-56 mb-3 rounded-full transition duration-200 hover:scale-110"
                src="Emre.png"
                alt="Emre"
              />
            </div>
            <div class="card sm:text-xs sm:overflow-auto md:text-md text-lg">
              <div class="monst-font sm:text-lg mt-2 mb-2 text-center">
                Emre Kocakavuk, MD, PhD
              </div>
              <div className="monst-font font-medium text-cyan-400 text-sm text-center">
                Group Leader
              </div>
              <div className=" text-cyan-400 text-sm text-center"></div>
              <div className="text-gray-600 text-sm text-md md:px-2 text-center mt-6"></div>
              <div class="icon-class flex items-center justify-center gap-3 mt-2 mb-5 w-auto h-5 text-gray-600">
                <Link to="mailto:emre.kocakavuk@uk-essen.de">
                  <SiGmail style={{ color: "#000" }} />
                </Link>
                <Link to="https://twitter.com/ekocakavuk" target="_blank">
                  <SiX style={{ color: "#000" }}
                  />
                </Link>
                <Link
                  to="https://scholar.google.co.in/citations?user=gGSCLooAAAAJ&hl=en&oi=ao"
                  target="_blank"
                >
                  <SiGooglescholar style={{ color: "#000" }} />
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Member 2 */}
        <div className="flex justify-center items-between py-4 p-3">
          <div class="max-w-sm rounded shadow-2xl">
            <div className="align-center px-12">
              <img
                class="h-56 w-56 mb-3 rounded-full transition duration-200 hover:scale-110"
                src="Fabian.png"
                alt="Fabian"
              />
            </div>
            <div class="card sm:text-xs sm:overflow-auto md:text-md text-lg drop-shadow-xl">
              <div class="monst-font sm:text-lg mt-2 mb-2 text-center">
                Fabian Ullrich, MD
              </div>
              <div className="monst-font font-medium text-cyan-400 text-sm text-center">
                Clinician Scientist
              </div>
              <div className="members-subhead text-gray-600 text-sm text-md md:px-2 text-center">
                Genomics of CNS Lymphoma
              </div>
              <div class="icon-class flex items-center justify-center gap-3 mt-2 mb-5 w-auto h-5 text-gray-600">
                <Link to="mailto:fabian.ullrich@uk-essen.de">
                  <SiGmail style={{ color: "#000" }}
                  />
                </Link>
                <Link to="https://twitter.com/fa_ulle" target="_blank">
                  <SiX style={{ color: "#000" }}
                  />
                </Link>
                <Link
                  to="https://www.researchgate.net/profile/Fabian-Ullrich"
                  target="_blank"
                >
                  <SiResearchgate style={{ color: "#000" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*Member 3 */}
        <div className="flex md:col-span-2 lg:col-span-1 justify-center items-between py-4 p-3">
          <div class="max-w-sm rounded shadow-2xl">
            <div className="align-center px-12">
              <img
                class="h-56 w-56 mb-3 rounded-full transition duration-200 hover:scale-110"
                src="Pranav.png"
                alt="Pranav"
              />
            </div>
            <div class="card  sm:text-xs sm:overflow-auto md:text-md text-lg">
              <div class="monst-font sm:text-lg mt-2 mb-2 text-center">
                Pranav Swaroop Gundla, MSc
              </div>
              <div className="monst-font font-medium text-cyan-400 text-sm text-center">
                PhD Student
              </div>
              <div className="members-subhead text-black text-sm text-md text-center">
                Computational Pathology
              </div>
              <div class="icon-class flex items-center justify-center gap-3 mt-2 mb-5 w-auto h-5 text-gray-600">
                <Link to="mailto:pranavswaroop.gundla@uk-essen.de">
                  <SiGmail style={{ color: "#000" }}
                  />
                </Link>
                <Link to="https://twitter.com/im_pranavgundla">
                  <SiX style={{ color: "#000" }}
                  />
                </Link>

                <Link
                  to="https://scholar.google.co.in/citations?user=UzlYsbgAAAAJ&hl=en&oi=ao"
                  target="_blank"
                >
                  <SiGooglescholar style={{ color: "#000" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
