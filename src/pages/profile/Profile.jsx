import useAuthStore from "../../store/authStore";

const Profile = () => {
  const { user, logOut } = useAuthStore();

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-gray-200">
      <aside className="w-80 bg-white  border-r border-gray-100 p-8 flex flex-col items-center">
        <div className="relative">
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg ring-4 ring-indigo-200">
            <img
              src={user?.image}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></span>
        </div>

        <h1 className="mt-5 text-xl font-semibold text-gray-800">
          {user?.firstName} {user.lastName}
        </h1>

        <p className="text-gray-500 text-sm">{user?.data?.email}</p>

        <div className="w-full h-px bg-gray-200 my-6"></div>

        <nav className="w-full flex flex-col gap-3">
          <button className="text-left px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">
            Profile Overview
          </button>
          <button className="text-left px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">
            Settings
          </button>
          <button className="text-left px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">
            Security
          </button>
          <button className="text-left px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">
            Notifications
          </button>

          <button
            onClick={() => logOut()}
            className="mt-4 text-left px-4 py-2 rounded-lg font-medium bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            Log Out
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>
      </main>
    </div>
  );
};

export default Profile;
