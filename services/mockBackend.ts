import { User, UserRole, SubscriptionStatus, Dhikr, Hadith, NewsItem, AppBanner } from '../types';

// Initial Mock Data
const INITIAL_ADMIN: User = {
  id: 'admin-1',
  email: 'anasnahilo20@gmail.com',
  name: 'المدير العام',
  role: UserRole.ADMIN,
  subscriptionStatus: SubscriptionStatus.ACTIVE,
  country: 'Morocco',
  city: 'Rabat'
};

const INITIAL_DHIKRS: Dhikr[] = [
  // Morning
  {
    id: 'm1',
    text: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ، وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
    count: 1,
    category: 'morning',
    benefit: 'من قالها حين يصبح أجير من الجن حتى يمسي',
    source: 'مسلم',
    order: 1
  },
  {
    id: 'm2',
    text: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
    count: 100,
    category: 'morning',
    benefit: 'حطت خطاياه وإن كانت مثل زبد البحر',
    source: 'متفق عليه',
    order: 2
  },
  // Evening
  {
    id: 'e1',
    text: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ، وَحْدَهُ لَا شَرِيكَ لَهُ.',
    count: 1,
    category: 'evening',
    benefit: 'ذكر الله في المساء',
    source: 'مسلم',
    order: 1
  },
  {
    id: 'e2',
    text: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.',
    count: 3,
    category: 'evening',
    benefit: 'من قالها لم تضره حمة تلك الليلة',
    source: 'مسلم',
    order: 2
  },
  // Sleep
  {
    id: 's1',
    text: 'بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، إِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.',
    count: 1,
    category: 'sleep',
    benefit: 'دعاء النوم',
    source: 'متفق عليه',
    order: 1
  },
  // Prayer
  {
    id: 'p1',
    text: 'أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ.',
    count: 1,
    category: 'prayer',
    benefit: 'السنة بعد التسليم',
    source: 'مسلم',
    order: 1
  }
];

const INITIAL_HADITHS: Hadith[] = [
  {
    id: 'h1',
    text: 'قال رسول الله ﷺ: «كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم»',
    source: 'متفق عليه',
    category: 'فضائل'
  },
  {
    id: 'h2',
    text: 'قال رسول الله ﷺ: «من صلى عليّ صلاة صلى الله عليه بها عشراً»',
    source: 'رواه مسلم',
    category: 'الصلاة على النبي'
  }
];

const INITIAL_NEWS: NewsItem[] = [
  { id: 'n1', title: 'تحديث جديد', content: 'تم إضافة أذكار جديدة للتطبيق، نسأل الله أن ينفع بكم.', date: '2023-10-25' },
  { id: 'n2', title: 'رمضان كريم', content: 'تقبل الله منا ومنكم صالح الأعمال.', date: '2023-03-10' }
];

const INITIAL_BANNERS: AppBanner[] = [
  { id: 'b1', imageUrl: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=1000', title: 'مرحباً بك في أدكاري' },
  { id: 'b2', imageUrl: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?auto=format&fit=crop&q=80&w=1000', title: 'ألا بذكر الله تطمئن القلوب' }
];

// LocalStorage Keys
const KEYS = {
  USERS: 'adkari_users',
  CURRENT_USER: 'adkari_current_user',
  DHIKRS: 'adkari_dhikrs',
  HADITHS: 'adkari_hadiths',
  NEWS: 'adkari_news',
  BANNERS: 'adkari_banners'
};

// Helper to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class MockBackendService {
  constructor() {
    this.init();
  }

  private init() {
    if (!localStorage.getItem(KEYS.USERS)) {
      localStorage.setItem(KEYS.USERS, JSON.stringify([INITIAL_ADMIN]));
    }
    if (!localStorage.getItem(KEYS.DHIKRS)) {
      localStorage.setItem(KEYS.DHIKRS, JSON.stringify(INITIAL_DHIKRS));
    }
    if (!localStorage.getItem(KEYS.HADITHS)) {
      localStorage.setItem(KEYS.HADITHS, JSON.stringify(INITIAL_HADITHS));
    }
    if (!localStorage.getItem(KEYS.NEWS)) {
      localStorage.setItem(KEYS.NEWS, JSON.stringify(INITIAL_NEWS));
    }
    if (!localStorage.getItem(KEYS.BANNERS)) {
      localStorage.setItem(KEYS.BANNERS, JSON.stringify(INITIAL_BANNERS));
    }
  }

  // --- Auth ---

  async login(email: string, password: string): Promise<User> {
    await delay(800);
    const users = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
    
    const user = users.find((u: any) => u.email === email);
    
    if (!user) throw new Error('البريد الإلكتروني غير مسجل');

    if (user.subscriptionStatus === SubscriptionStatus.BANNED) {
      throw new Error('تم حظر هذا الحساب لمخالفة القوانين.');
    }
    
    // Check specific Admin credentials
    if (email === 'anasnahilo20@gmail.com') {
      if (password !== 'Anas@2000') {
         throw new Error('كلمة المرور غير صحيحة');
      }
    } else {
      // Normal user password check (mock)
      if (password !== '123456') throw new Error('كلمة المرور غير صحيحة (جرب 123456)');
    }

    localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(user));
    return user;
  }

  async register(name: string, email: string, password: string, country: string, city: string): Promise<User> {
    await delay(1000);
    const users = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
    
    if (users.find((u: User) => u.email === email)) {
      throw new Error('البريد الإلكتروني مسجل بالفعل');
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role: UserRole.USER,
      // Change default to ACTIVE based on user request to remove confirmation delay
      subscriptionStatus: SubscriptionStatus.ACTIVE, 
      country,
      city
    };

    users.push({ ...newUser, password }); 
    localStorage.setItem(KEYS.USERS, JSON.stringify(users));
    localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(newUser));
    return newUser;
  }

  async logout(): Promise<void> {
    await delay(300);
    localStorage.removeItem(KEYS.CURRENT_USER);
  }

  getCurrentUser(): User | null {
    const uStr = localStorage.getItem(KEYS.CURRENT_USER);
    if (!uStr) return null;
    
    const sessionUser = JSON.parse(uStr);
    
    // Re-validate against the "Database" (USERS array) to ensure status is up to date
    // This ensures that if an Admin bans a user, the user is immediately caught here.
    const users = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
    const dbUser = users.find((u: User) => u.id === sessionUser.id);
    
    if (dbUser) {
      // Update session storage if db status changed
      if (dbUser.subscriptionStatus !== sessionUser.subscriptionStatus) {
        localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(dbUser));
      }
      return dbUser;
    }
    
    return null;
  }

  async resetPassword(email: string): Promise<void> {
    await delay(1000);
    const users = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
    const user = users.find((u: User) => u.email === email);
    if (!user) throw new Error('البريد الإلكتروني غير موجود');
    console.log(`Email sent to ${email} with reset link.`);
  }

  async updatePassword(email: string, oldPass: string, newPass: string): Promise<void> {
    await delay(800);
    console.log(`Password updated for ${email}`);
  }

  // --- Admin ---

  async getAllUsers(): Promise<User[]> {
    await delay(500);
    return JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
  }

  async updateUserSubscription(userId: string, status: SubscriptionStatus, endDate?: string): Promise<void> {
    await delay(500);
    const users = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
    const updatedUsers = users.map((u: User) => {
      if (u.id === userId) {
        return { ...u, subscriptionStatus: status, subscriptionEndDate: endDate };
      }
      return u;
    });
    localStorage.setItem(KEYS.USERS, JSON.stringify(updatedUsers));
    
    // Force update current user if it matches, though getCurrentUser() now handles the sync
    const currentUser = this.getCurrentUser();
    if (currentUser && currentUser.id === userId) {
       localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify({
         ...currentUser,
         subscriptionStatus: status,
         subscriptionEndDate: endDate
       }));
    }
  }
  
  async deleteUser(userId: string): Promise<void> {
    await delay(500);
    const users = JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
    const updatedUsers = users.filter((u: User) => u.id !== userId);
    localStorage.setItem(KEYS.USERS, JSON.stringify(updatedUsers));
  }

  // --- Content (Dhikr & Hadith) ---

  async getDhikrs(): Promise<Dhikr[]> {
    return JSON.parse(localStorage.getItem(KEYS.DHIKRS) || '[]');
  }

  async saveDhikr(dhikr: Dhikr): Promise<void> {
    await delay(400);
    const list = await this.getDhikrs();
    const index = list.findIndex(d => d.id === dhikr.id);
    if (index >= 0) {
      list[index] = dhikr;
    } else {
      list.push(dhikr);
    }
    localStorage.setItem(KEYS.DHIKRS, JSON.stringify(list));
  }

  async deleteDhikr(id: string): Promise<void> {
    const list = await this.getDhikrs();
    const filtered = list.filter(d => d.id !== id);
    localStorage.setItem(KEYS.DHIKRS, JSON.stringify(filtered));
  }

  async getHadiths(): Promise<Hadith[]> {
    return JSON.parse(localStorage.getItem(KEYS.HADITHS) || '[]');
  }

  async saveHadith(hadith: Hadith): Promise<void> {
    await delay(400);
    const list = await this.getHadiths();
    const index = list.findIndex(h => h.id === hadith.id);
    if (index >= 0) {
      list[index] = hadith;
    } else {
      list.push(hadith);
    }
    localStorage.setItem(KEYS.HADITHS, JSON.stringify(list));
  }

  async deleteHadith(id: string): Promise<void> {
    const list = await this.getHadiths();
    const filtered = list.filter(h => h.id !== id);
    localStorage.setItem(KEYS.HADITHS, JSON.stringify(filtered));
  }

  // --- News & Banners ---

  async getNews(): Promise<NewsItem[]> {
    return JSON.parse(localStorage.getItem(KEYS.NEWS) || '[]');
  }

  async saveNews(news: NewsItem): Promise<void> {
    const list = await this.getNews();
    const index = list.findIndex(n => n.id === news.id);
    if (index >= 0) list[index] = news;
    else list.push(news);
    localStorage.setItem(KEYS.NEWS, JSON.stringify(list));
  }

  async deleteNews(id: string): Promise<void> {
    const list = await this.getNews();
    const filtered = list.filter(n => n.id !== id);
    localStorage.setItem(KEYS.NEWS, JSON.stringify(filtered));
  }

  async getBanners(): Promise<AppBanner[]> {
    return JSON.parse(localStorage.getItem(KEYS.BANNERS) || '[]');
  }

  async saveBanner(banner: AppBanner): Promise<void> {
    const list = await this.getBanners();
    const index = list.findIndex(b => b.id === banner.id);
    if (index >= 0) list[index] = banner;
    else list.push(banner);
    localStorage.setItem(KEYS.BANNERS, JSON.stringify(list));
  }

  async deleteBanner(id: string): Promise<void> {
    const list = await this.getBanners();
    const filtered = list.filter(b => b.id !== id);
    localStorage.setItem(KEYS.BANNERS, JSON.stringify(filtered));
  }
}

export const mockBackend = new MockBackendService();
