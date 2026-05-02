function Navbar({ setLogin }) {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center" style={{ backgroundColor: '#fff', color: '#000' }}>
      <h2 className="text-xl font-semibold" style={{ color: '#1f2937', fontSize: '20px', fontWeight: '600' }}>
        Human Resource Management System
      </h2>

      <button
        onClick={() => setLogin(false)}
        className="bg-red-500 text-white px-4 py-2 rounded"
        style={{ backgroundColor: '#ef4444', color: '#fff' }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;