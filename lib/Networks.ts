import NetworkConfigInterface from './NetworkConfigInterface';

/*
 * Local networks
 */
export const hardhatLocal: NetworkConfigInterface = {
  chainId: 31337,
  symbol: 'ETH (test)',
  blockExplorer: {
    name: 'Block explorer (not available for local chains)',
    generateContractUrl: (contractAddress: string) => `#`
  }
};

/*
 * Ethereum
 */
export const ethereumTestnet: NetworkConfigInterface = {
  chainId: 4,
  symbol: 'ETH (test)',
  blockExplorer: {
    name: 'Etherscan (Rinkeby)',
    generateContractUrl: (contractAddress: string) =>
      `https://rinkeby.etherscan.io/address/${contractAddress}`
  }
};

export const ethereumMainnet: NetworkConfigInterface = {
  chainId: 1,
  symbol: 'ETH',
  blockExplorer: {
    name: 'Etherscan',
    generateContractUrl: (contractAddress: string) =>
      `https://etherscan.io/address/${contractAddress}`
  }
};

/*
 * BSC
 */
export const bscTestnet: NetworkConfigInterface = {
  chainId: 97,
  symbol: 'BNB (test)',
  blockExplorer: {
    name: 'BSC TestNet Scan',
    generateContractUrl: (contractAddress: string) =>
      `https://testnet.bscscan.com/address/${contractAddress}`
  }
};

export const bscMainnet: NetworkConfigInterface = {
  chainId: 56,
  symbol: 'BNB',
  blockExplorer: {
    name: 'BSC MainNet Scan',
    generateContractUrl: (contractAddress: string) =>
      `https://bscscan.com/address/${contractAddress}`
  }
};

/*
 * Avalanche
 */
export const avalancheTestnet: NetworkConfigInterface = {
  chainId: 43113,
  symbol: 'AVAX (test)',
  blockExplorer: {
    name: 'Avalanche scan(Fuji)',
    generateContractUrl: (contractAddress: string) =>
      `https://testnet.snowtrace.io/address/${contractAddress}`
  }
};

export const avalancheMainnet: NetworkConfigInterface = {
  chainId: 43114,
  symbol: 'AVAX',
  blockExplorer: {
    name: 'Avalanche scan',
    generateContractUrl: (contractAddress: string) =>
      `https://snowtrace.io/address/${contractAddress}`
  }
};

/*
 * Arbitrum
 */
export const arbitrumTestnet: NetworkConfigInterface = {
  chainId: 421611,
  symbol: 'ARETH',
  blockExplorer: {
    name: 'Arbitrum Testnet',
    generateContractUrl: (contractAddress: string) =>
      `https://testnet.arbiscan.io/address/${contractAddress}`
  }
};

export const arbitrumMainnet: NetworkConfigInterface = {
  chainId: 42161,
  symbol: 'ETH',
  blockExplorer: {
    name: 'Arbitrum One',
    generateContractUrl: (contractAddress: string) =>
      `https://arbiscan.io/address/${contractAddress}`
  }
};

/*
 * Polygon
 */
export const polygonTestnet: NetworkConfigInterface = {
  chainId: 80001,
  symbol: 'MATIC (test)',
  blockExplorer: {
    name: 'Polygonscan (Mumbai)',
    generateContractUrl: (contractAddress: string) =>
      `https://mumbai.polygonscan.com/address/${contractAddress}`
  }
};

export const polygonMainnet: NetworkConfigInterface = {
  chainId: 137,
  symbol: 'MATIC',
  blockExplorer: {
    name: 'Polygonscan',
    generateContractUrl: (contractAddress: string) =>
      `https://polygonscan.com/address/${contractAddress}`
  }
};

/*
 * Fantom
 */
export const fantomTestnet: NetworkConfigInterface = {
  chainId: 4002,
  symbol: 'FTM (test)',
  blockExplorer: {
    name: 'FTMScan test',
    generateContractUrl: (contractAddress: string) =>
      `https://testnet.ftmscan.com/address/${contractAddress}`
  }
};

export const fantomMainnet: NetworkConfigInterface = {
  chainId: 250,
  symbol: 'FTM',
  blockExplorer: {
    name: 'FTMScan',
    generateContractUrl: (contractAddress: string) =>
      `https://ftmscan.com/address/${contractAddress}`
  }
};

/*
 * Optimism
 */
export const optimismTestnet: NetworkConfigInterface = {
  chainId: 69,
  symbol: 'KOR',
  blockExplorer: {
    name: 'Optimism Test Scan(Kovan)',
    generateContractUrl: (contractAddress: string) =>
      `https://kovan-optimistic.etherscan.io/address/${contractAddress}`
  }
};

export const optimismMainnet: NetworkConfigInterface = {
  chainId: 10,
  symbol: 'ETH',
  blockExplorer: {
    name: 'Optimism Scan',
    generateContractUrl: (contractAddress: string) =>
      `https://optimistic.etherscan.io/address/${contractAddress}`
  }
};