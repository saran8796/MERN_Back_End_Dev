import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PermissionLetterDisplay = () => {
  const [formData, setFormData] = useState({
    username: "",
    city: "",
    mobile: "",
    email: "",
    position: "",
    reason: "",
  });
  const [currentDate, setCurrentDate] = useState("");
  const location = useLocation();

  useEffect(() => {
    const data = location.state;
    setFormData(data.formData);
    const today = new Date();

    // Format: DD/MM/YYYY
    const formattedDate = today.toLocaleDateString("en-IN");
    setCurrentDate(formattedDate);
  }, []);

  return (
    <>
      <div>
        <div>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
              {/* Letter Container */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Company Header */}
                <div className="px-8 py-6">
                  <div>
                    <div className="flex justify-center items-center mt-4">
                      <h1 className="text-2xl font-bold">Permission Letter</h1>
                    </div>
                    <div className="text-right justify-center items-end mt-5 mx-6">
                      <p className="text-grey-900">
                        Date:{" "}
                        <span className="font-semibold">{currentDate}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Letter Content */}
                <div className="px-12 py-10">
                  {/* From */}
                  <div className="mb-8">
                    <p className="text-gray-700 mb-2">From,</p>
                    <div className="ml-6">
                      <p className="text-gray-800">{formData.username},</p>
                      <p className="text-gray-800">{formData.company},</p>
                      <p className="text-gray-800">{formData.city}.</p>
                    </div>
                  </div>

                  {/* Recipient */}
                  <div className="mb-8">
                    <p className="text-gray-700 mb-2">To,</p>
                    <div className="ml-6">
                      <p className="text-gray-800">{formData.position}</p>
                      <p className="text-gray-800">{formData.company},</p>
                      <p className="text-gray-800">{formData.city}.</p>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-8">
                    <p className="font-semibold text-gray-900 ">
                      Subject: Permission to take leave
                    </p>
                  </div>

                  {/* Salutation */}
                  <div className="mb-6">
                    <p className="text-gray-700">Dear Sir,</p>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-4 text-gray-800 leading-relaxed mb-8">
                    <p>{formData.reason}</p>
                  </div>

                  {/* Closing */}
                  <div className="space-y-4">
                    <p className="text-gray-700 flex justify-center items-center">
                      Thank you for your understanding.
                    </p>
                    <div className="mt-8">
                      <p className="text-gray-700 mb-2 flex justify-end">
                        Yours sincerely,
                      </p>
                      <p className="font-semibold text-gray-900 flex justify-end mr-4">
                        {formData.username}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PermissionLetterDisplay;
