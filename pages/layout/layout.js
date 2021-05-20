export default function Layout({ children }) {
  return (
    <div>
      {/* Header */}
      <header>Header</header>

      {/* Main component */}
      <main>{children}</main>

      {/* Footer */}
      <footer>Footer</footer>
    </div>
  );
}
