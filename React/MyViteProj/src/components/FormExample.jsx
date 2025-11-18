import { useEffect, useState } from "react";

const FormExample = () => {
  const [formdata, setForm] = useState({ name: "", age: "" });
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);

  //useEffect
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("users")));
    setUsers(JSON.parse(localStorage.getItem("users")));
  }, []);

  // Changes of form
  const handleChange = (e) => {
    setForm({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...(users ?? []), formdata]);

    alert("Successfully Name: " + formdata.name + " Age: " + formdata.age);

    setForm({ name: "", age: "" });
  };

  const handleGetData = (e) => {
    e.preventDefault();
    setData(JSON.parse(localStorage.getItem("users")));
    alert(localStorage.getItem("users"));
  };

  const handleUploadData = (e) => {
    e.preventDefault();
    localStorage.setItem("users", JSON.stringify(users));
    alert("Successfully uploaded");
  };

  const handleClearData = (e) => {
    e.preventDefault();
    localStorage.clear();
    setUsers([]);
    setData([]);
    alert("Datas are cleared");
    handleGetData();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 mt-15 bg-white rounded-xl shadow-md border border-gray-200"
      >
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            User Data Manager
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <input
                type="number"
                name="age"
                value={formdata.age}
                onChange={handleChange}
                placeholder="Age"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-3 rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm"
            >
              Set
            </button>
            <button
              type="button"
              onClick={handleUploadData}
              className="bg-green-500 text-white py-2 px-3 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm"
            >
              Upload
            </button>
            <button
              type="button"
              onClick={handleGetData}
              className="bg-purple-500 text-white py-2 px-3 rounded-lg font-medium hover:bg-purple-600 transition-colors text-sm"
            >
              Get
            </button>
            <button
              type="button"
              onClick={handleClearData}
              className="bg-red-500 text-white py-2 px-3 rounded-lg font-medium hover:bg-red-600 transition-colors text-sm"
            >
              Clear
            </button>
          </div>
        </div>
      </form>

      <div className="mt-12">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Details of the User
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
          {data &&
            data.length > 0 &&
            data.map((e, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-4">
                  {/* Avatar circle */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {e.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {e.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      <span className="font-medium text-gray-900">{e.age}</span>{" "}
                      years old
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FormExample;
