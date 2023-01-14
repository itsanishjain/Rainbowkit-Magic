import { MagicConnector } from "@everipedia/wagmi-magic-connector";

export const rainbowMagicConnector = ({ chains }) => ({
  id: "magic",
  name: "Magic",
  iconUrl:
    "https://images.unsplash.com/photo-1673434524408-22e6ef86a1ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  iconBackground: "#fff",
  createConnector: () => {
    const connector = new MagicConnector({
      chains: chains,
      options: {
        // isDarkMode: true,
        apiKey: "pk_live_672BC627E5CA1E68",
        oauthOptions: {
          providers: ["google", "twitter", "discord"],
        },
      },
    });
    return {
      connector,
    };
  },
});
