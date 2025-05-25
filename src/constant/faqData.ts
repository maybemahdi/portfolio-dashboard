export interface FaqItem {
  question: string;
  answer: string;
}

export const gpuHostingFaqs: FaqItem[] = [
  {
    question: 'What is GPU hosting?',
    answer:
      'GPU Hosting is a hosting service that utilizes Graphics Processing Units (GPUs) to enhance performance for resource intensive tasks like AI, machine Learning, and 3D rendering, offering faster processing and improved efficiency.',
  },
  {
    question: 'Which Operating Systems Are Supported by GPU Hosting?',
    answer:
      'Most GPU hosting providers support a variety of operating systems including Windows Server, various Linux distributions (Ubuntu, CentOS, Debian), and sometimes specialized OS options optimized for GPU workloads. The specific OS availability may vary by provider, but Linux distributions are typically preferred for many GPU-intensive workloads due to their performance characteristics.',
  },
  {
    question: 'What Amount of Graphics Memory Is Required for Inference?',
    answer:
      'The amount of graphics memory (VRAM) required for inference depends on the model size and complexity. For basic models, 4-8GB may be sufficient. Mid-range models typically require 8-16GB, while large language models and complex AI applications may need 24GB or more. Real-time applications and batch processing of multiple inference tasks simultaneously will require additional memory.',
  },
  {
    question: 'What is a Dedicated GPU Server?',
    answer:
      'A Dedicated GPU Server is a specialized server equipped with one or more dedicated Graphics Processing Units (GPUs) that provides exclusive access to the entire hardware resources. Unlike shared GPU solutions, dedicated GPU servers offer full GPU capacity, ensuring maximum performance for compute-intensive tasks like AI training, rendering, and scientific simulations.',
  },
  {
    question: 'What Are the Advantages of a Dedicated GPU Server?',
    answer:
      "Dedicated GPU servers offer several advantages: 1) Exclusive resource access with no competition from other users, 2) Superior performance for compute-intensive tasks, 3) Customizable hardware configurations to match specific workloads, 4) Better security as resources aren't shared with other customers, 5) Consistent performance without the variability of shared environments, and 6) Higher throughput for data-intensive applications.",
  },
  {
    question: 'What GPU server do you need for 4K streaming?',
    answer:
      'For 4K streaming, you typically need a GPU server with at least an NVIDIA RTX 2070 or better GPU, 8-16GB of VRAM, a modern multi-core CPU (8+ cores recommended), 32GB+ system RAM, and sufficient network bandwidth (at least 25Mbps upload speed). For professional streaming with multiple 4K sources or advanced effects, consider higher-end options like RTX 3080/3090 or RTX 4000 series GPUs with 16GB+ VRAM.',
  },
];


export const vpsHostingFaqs: FaqItem[] = [
  {
    question: 'What is VPS hosting?',
    answer:
      'VPS Hosting is a hosting service where a physical server is divided into multiple virtual servers, each with its own resources (CPU, RAM, and storage). It offers better performance and customization compared to shared hosting, allowing for more control and dedicated resources.',
  },
  {
    question: 'What Are the Advantages of a Dedicated VPS Server?',
    answer:
      'Dedicated VPS servers offer several advantages, including exclusive access to hardware resources, increased security, customizable configurations, and improved performance for resource-intensive applications. They are ideal for businesses requiring high performance and reliability without the competition from other users.',
  },
  {
    question: 'Which Operating Systems Are Supported by VPS Hosting?',
    answer:
      'VPS hosting supports various operating systems, including popular Linux distributions (Ubuntu, CentOS, Debian) and Windows Server. The choice of operating system depends on the provider and the specific requirements of the applications being hosted.',
  },
  {
    question: 'What is a Dedicated VPS Server?',
    answer:
      'A Dedicated VPS Server is a virtual private server that gives you exclusive access to all the resources of a physical server. Unlike shared VPS, where resources are divided among multiple users, a dedicated VPS ensures that the full computing power of the server is dedicated to your needs, providing greater stability and performance.',
  },
  {
    question: 'What Are the Advantages of a Dedicated VPS Server?',
    answer:
      'Dedicated VPS servers provide improved performance, better security, and full control over the server. They are ideal for businesses or applications requiring more resources, faster processing, or the ability to install custom software or configurations.',
  },
  {
    question: 'What Amount of Graphics Memory Is Required for Inference?',
    answer:
      'The amount of graphics memory (VRAM) needed for inference depends on the size and complexity of the AI model. Small models may require 4-8GB of VRAM, while larger models or real-time inference tasks may require 16GB or more. The server’s VRAM will impact the performance and speed of inference processes.',
  },
  {
    question: 'What VPS server do you need for 4K streaming?',
    answer:
      'For 4K streaming, you need a VPS with a powerful GPU (e.g., NVIDIA RTX 2070 or higher), at least 8-16GB of VRAM, a multi-core CPU (8+ cores recommended), and sufficient network bandwidth (minimum 25Mbps upload speed). Higher-end GPUs like RTX 3080 or RTX 4000 series with 16GB+ VRAM are recommended for professional-level 4K streaming.',
  },
  {
    question: 'What is a Dedicated VPS Server?',
    answer:
      'A Dedicated VPS Server refers to a virtual server where the resources of a physical server are dedicated to a single user or organization. This type of VPS offers increased reliability, performance, and control compared to shared hosting options.',
  },
];