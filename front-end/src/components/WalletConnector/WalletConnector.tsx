import { useMetaMask } from "metamask-react";
import { Button, Form } from "react-bootstrap";

export default function WalletConnector() {
  const { connect, status } = useMetaMask();

  const onConnectClick = () => {
    if (status !== "connected") {
      connect();
    }
  };

  const getButtonText = () => {
    if (status === "initializing") return "Synchronisation with MetaMask ongoing...";

    if (status === "unavailable") return "MetaMask not available :(";

    if (status === "notConnected") return "Connect to MetaMask";

    if (status === "connecting") return "Connecting...";
  };

  return (
    <Form className="d-flex">
      {status === "connected" && <label style={{ color: "#fff" }}>MetaMask Connected</label>}
      {status !== "connected" && (
        <Button variant="outline-success" onClick={onConnectClick}>
          {getButtonText()}
        </Button>
      )}
    </Form>
  );
}
