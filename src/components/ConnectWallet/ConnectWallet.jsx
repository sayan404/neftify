
import '@rainbow-me/rainbowkit/styles.css';
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import './ConnectWallet.css'
const ConnectWallet = () => {
    const { chains, publicClient } = configureChains(
        [mainnet, polygon, optimism, arbitrum, base, zora],
        [
          alchemyProvider({ apiKey: import.meta.env.VITE_API_KEY }),
          publicProvider()
        ]
      );
      
      const { connectors } = getDefaultWallets({
        appName: 'neftify',
        projectId: 'f80eeab4e5ab4e9ae16acc64066beb8f',
        chains
      });
      
      const wagmiConfig = createConfig({
        autoConnect: true,
        connectors,
        publicClient
      })

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      <div className='token_button' ><ConnectButton /></div>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default ConnectWallet