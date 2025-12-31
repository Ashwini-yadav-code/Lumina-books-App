
import { Book } from './types';

export const MOCK_USER = {
  name: "Alex Mitchell",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyV3kjiFPPgE2oxkInZxnHX9-oIkI5A5tjjCQC-YBp21PbwAnunk93yo8WMGYXH6YKw30U2wnUIvqodNubcJ-YJ9tKQkUTbhzMby_u08NPwaldFBI7KN6vpcKS6ZcKirvvMuCJN0xvufFSfBj8nvPUo0ofiUXcy4l5fCIdTNAfN07ckDvMNg-pxS4HwlVOiCGSDfqJgq9adErt9NDcJ8HFCgrcYWipuF_lIBtVn6dH1-zASzIEk4IzOOtyQWShk2c1W2SkXzyomwM",
  status: 'online' as const
};

export const BOOKS: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRn-B9sazW5DCOQxluTGgu0K6Bluazm1P3XkwqGabqSNTgC9VO5NCi1lzRcxrzvHuBI0684iqz3DNef4Thv8cA8gdeiPOzv6viXFdcD3SpsOB16jnpzBByeLv4ZzpQPYV7UkIBpo2s0D1jZmayf8xHlbTXI92F9is7TC7oHq_2sZZgGfYpWAPZPnmzvQVmhJvHpSnHHpRg3zZnC00InD1j2JBWaaaOh5M6QMN0p3J7PQHJA5MWd5GuMAMkBKsqFVwjE3Gy49BSSCY",
    rating: 4.8,
    reviews: "12.5k",
    matchPercentage: 98,
    price: "$12.99",
    synopsis: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices...",
    tags: ["#Comfort Read", "#Philosophical", "#Emotional", "#Fast Paced"]
  },
  {
    id: "2",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAng5Hp2wxDR30Wg8TB6OfpHJonPXjq9OSEGa1LWqj1bYExtsNALUp6KwMmrXiPFU7NHs4dNK11FvMvfU4xVLxpb_cXHZrxYnoaqX8219HJrfcA2VjlqBDD10hulTfozQ7KdISn0s7fxyHzBbZmXu9Q2zFX1C4F4CvdcIe1Fw_WA04FvK_vp8Iv-GhQU2sQNt43H_ivT_PjtpH2CsHF4HgHu0XOz4ya2i3Fg_qq-nI17yXnLeQJVjwWChkH3LhbV_-EPRB8K_TXwI",
    rating: 4.9,
    matchPercentage: 92,
  },
  {
    id: "3",
    title: "Dune",
    author: "Frank Herbert",
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjpW52TbYSS4mKFP_e0WUstP8pdlYZVOjqnnzYNamlaYh_Dna1QGppQbuO9bee0EokAQy_54S4vWcDonaTj2ciX61dBXN0CvA1mBO9wCkgfkErg338cvryqiPdCZc7O0oRaIvX4vPHTgWAS46dGDBFKyoC9UNE8mDinPXcnkoIQ1d0ztk7ciT-fEb5cjGEZZOQh6U6PfS_49D8uA4VcJ5JNRePQlW4nDY-B3EAZvU6piQSpbgt25Ht3_bv8mh8Xk1XRf0X-u_hT6s",
    rating: 4.8,
    matchPercentage: 85,
  }
];

export const EDITOR_PICKS: Book[] = [
    {
        id: "e1",
        title: "Normal People",
        author: "Sally Rooney",
        coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-y4AqppEGXoa4PpDxu4tKIGIh4e2TQon5xVUWKbnvZRKY5GjcKIUJanu1Ez6r7SwOD5oFbQFJYhi0k7p7HpEWaozmyPXj35CtcToLTeOSf5WwM-ErXYOtBTQYALlXNTlXKR2N6PjMkvkb7AxCqPSfMTX0TKaHuFm2VT40MAM0JnZuuFRBEqhPiV5SUCk1CJIqQQnsf5BYlPMBZgfFq2nBdMsUJlLfOMi7NM8WTvCQSMDeMIfI2swiIHzucfaoRIyLAdToh2ZDjBw",
        rating: 4.2
    },
    {
        id: "e2",
        title: "Educated",
        author: "Tara Westover",
        coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFYfnrnV7H9MkGkecDOD-9Y5jctKJp5VY0Gh5YbBi1zf6WtT3qKEAwN7w56MjUxgZAAw-ue7TveE-85oOOXec6Nbok3geOyDNzmBul1g03JRON2iHkfUZ_ad84XgNoTjjXBT9UfLWdJ4uUsj7c2KLqeTjLIuXkQG58hsRLqeltYUBbrIJ2RrLraBQHk2akMM-StY_luxEJ9Wg2s6jrWV0H0IBIGrWQ56K1xeTl9Rkd4Sm2uwKTXiD9rG-1eJ-qEX5IbOhnTnMeZq4",
        rating: 4.7
    },
    {
        id: "e3",
        title: "The Vanishing Half",
        author: "Brit Bennett",
        coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcEPf-ZrQJs0qSZOlnvrsyUdHfp6li5Xf2TqpNY7MK_XGz7euxnCBRO33Q_Caow__IQZX8Ij_T4Q4XCt8_KrDL7MLibjlRP8njIdlKKYLOTUgJM70pJIqx3A2DwuClW9gtxUKtGt0kN3cHh-IAlMYjF4IiBP7y24WVchcoQDwq9aKI_EmNW9Tldj14cntsLWC9JG11GCQoJMts-chW8izZwxrmCWsTJsXSKH0YEjYpCG9PHweEhTxdR8XSb8WMi0FlZovdNLdvKKM",
        rating: 4.5
    }
];
