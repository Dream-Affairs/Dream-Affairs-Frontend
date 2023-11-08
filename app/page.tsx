import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      Hello welcome to Dream Affairs
      <li>
        <Link href="/auth/login">Login</Link>
      </li>
      <li>
        <Link href="/auth/reset-password">Reset password</Link>
      </li>
      <li>
        <Link href="/auth/2fa">2fa</Link>
      </li>
    </ul>
  );
}
