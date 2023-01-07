export const navbarContainerStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
};

export const logoStyle = {
  mr: 2,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};
export const menuStyle = { display: { xs: "none", md: "flex" } , gap:6};

export const modeStyle = {
  icon: {
    fontSize: "30px",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  iconText: {
    fontSize: { xs: "8px", md: "16px" },
  },
};
export const mobileMenuIconStyle = { display: { md: "none", xs: "block" } };
