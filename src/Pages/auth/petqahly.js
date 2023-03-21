<form onSubmit={handleRegister}>
<label>
  Username:
  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
</label>
<br />
<label>
  Password:
  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
</label>
<br />
<label>
  Confirm Password:
  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
</label>
<br />
<button type="submit">Register</button>
<br />
<Link to="/login">Already have an account? Login here.</Link>
</form>