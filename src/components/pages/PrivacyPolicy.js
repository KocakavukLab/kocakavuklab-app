import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center p-5 lg:p-20">
      <h1 className="monst-font text-cyan-400 lg:text-5xl text-3xl font-bold mb-4">
        Privacy Policy
      </h1>
      <div className="w-full lg:w-2/3 lg:text-justify sm:text-left">
        <h2 className="monst-font text-blue-600 lg:text-2xl text-sm font-extrabold mt-4">
          1. An overview of data protection
        </h2>
        <h3 className="monst-font text-teal-700 text-sm lg:text-xl font-bold sm:text-md mt-4">
          General information
        </h3>
        <p className="monst-font text-sm lg:text-base">
          The following information will provide you with an easy to navigate
          overview of what will happen with your personal data when you visit
          this website. The term “personal data” comprises all data that can be
          used to personally identify you. For detailed information about the
          subject matter of data protection, please consult our Data Protection
          Declaration, which we have included beneath this copy.
        </p>

        <h2 className="monst-font text-blue-600 text-sm lg:text-2xl font-bold mt-4">
          2. Hosting
        </h2>
        <p className="monst-font text-sm lg:text-base">
          We host our website with{" "}
          <Link
            to="https://vercel.com/"
            className="hover:text-blue-700 visited:text-orange-400"
          >
            Vercel app{" "}
          </Link>
          which is a platform for developers that provides the tools, workflows,
          and infrastructure you need to build and deploy your web apps faster,
          without the need for additional configuration. We use the Vercel App
          as open-sourcing agent for all the page publishing.GNU License.
        </p>

        <h2 className="monst-font text-blue-600 text-sm lg:text-2xl font-bold mt-4">
          3. Custom Services
        </h2>
        <p className="monst-font text-sm lg:text-base">
          Handling applicant data We offer website visitors the opportunity to
          submit job applications to us (e.g., via e-mail, via postal services
          on by submitting the online job application form). Below, we will
          brief you on the scope, purpose and use of the personal data collected
          from you in conjunction with the application process. We assure you
          that the collection, processing, and use of your data will occur in
          compliance with the applicable data privacy rights and all other
          statutory provisions and that your data will always be treated as
          strictly confidential. Scope and purpose of the collection of data If
          you submit a job application to us, we will process any affiliated
          personal data (e.g., contact and communications data, application
          documents, notes taken during job interviews, etc.), if they are
          required to make a decision concerning the establishment or an
          employment relationship. The legal grounds for the aforementioned are
          § 26 GDPR according to German Law (Negotiation of an Employment
          Relationship), Art. 6(1)(b) GDPR (General Contract Negotiations) and –
          provided you have given us your consent – Art. 6(1)(a) GDPR. You may
          revoke any consent given at any time. Within our company, your
          personal data will only be shared with individuals who are involved in
          the processing of your job application. If your job application should
          result in your recruitment, the data you have submitted will be
          archived on the grounds of § 26 GDPR and Art. 6(1)(b) GDPR for the
          purpose of implementing the employment relationship in our data
          processing system. Data Archiving Period If we are unable to make you
          a job offer or you reject a job offer or withdraw your application, we
          reserve the right to retain the data you have submitted on the basis
          of our legitimate interests (Art. 6(1)(f) GDPR) for up to 6 months
          from the end of the application procedure (rejection or withdrawal of
          the application). Afterwards the data will be deleted, and the
          physical application documents will be destroyed. The storage serves
          in particular as evidence in the event of a legal dispute. If it is
          evident that the data will be required after the expiry of the 6-month
          period (e.g., due to an impending or pending legal dispute), deletion
          will only take place when the purpose for further storage no longer
          applies. Longer storage may also take place if you have given your
          agreement (Article 6(1)(a) GDPR) or if statutory data retention
          requirements preclude the deletion.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
