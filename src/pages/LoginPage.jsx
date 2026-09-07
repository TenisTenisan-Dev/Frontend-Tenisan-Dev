import { ArrowLeft, ArrowRight, LockKeyhole, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = new URLSearchParams(location.search).get('redirect');

  function handleSubmit(event) {
    event.preventDefault();
    navigate(redirect === 'booking' ? '/booking' : '/dashboard');
  }

  return (
    <div className="auth-page">
      <div className="auth-visual"><Link className="home-brand auth-brand" to="/"><span className="home-brand-mark"><i /></span><span><strong>rally</strong><small>COURT CLUB</small></span></Link><div className="auth-visual-copy"><p className="home-kicker">Welcome back</p><h1>Your next<br /><em>rally awaits.</em></h1><p>Step back on court and keep building the game you want to play.</p></div><span className="auth-visual-number">02 / 04</span></div>
      <main className="auth-card"><Link className="back-link" to="/"><ArrowLeft size={15} /> Back to home</Link><div className="auth-form-wrap"><p className="home-kicker">Member area</p><h2>Log in to Rally Court</h2><p className="auth-subtitle">Access your classes, bookings, and progress.</p><form onSubmit={handleSubmit}><label>Email address<div className="input-wrap"><Mail size={16} /><input type="email" placeholder="you@example.com" required /></div></label><label>Password<div className="input-wrap"><LockKeyhole size={16} /><input type="password" placeholder="Enter your password" required /></div></label><div className="form-row"><label className="checkbox-label"><input type="checkbox" /> Remember me</label><a href="#forgot">Forgot password?</a></div><button className="auth-submit" type="submit">Continue <ArrowRight size={16} /></button></form><p className="auth-switch">New to Rally Court? <a href="#register">Create an account</a></p></div></main>
    </div>
  );
}
