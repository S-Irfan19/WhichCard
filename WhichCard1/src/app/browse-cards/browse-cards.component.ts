import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface CreditCard {
  id: string;
  name: string;
  issuer: string;
  image: string;
  apr: string;
  rewards: string;
  annualFee: string;
  signupBonus: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-browse-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browse-cards.component.html',
  styleUrl: './browse-cards.component.css'
})
export class BrowseCardsComponent {
  constructor(private router: Router, private activateRoute: ActivatedRoute) {}

  check = "hidden";
  uncheck = "f1-pos";
  selectedcard = "Zolve aspire";
  selectedItem = 'Airbnb';
  loginID = '';
  account = '';
  
      // Comprehensive credit card data with real offers
      cards: CreditCard[] = [
        {
          id: '1',
          name: 'Chase Sapphire Preferred',
          issuer: 'Chase',
          image: 'assets/images/cards/chase-sapphire-preferred-real.jpg',
          apr: '21.49% - 28.49%',
          rewards: '2x points on travel & dining, 1x on all other purchases',
          annualFee: '$95',
          signupBonus: '60,000 points after spending $4,000 in first 3 months',
          category: 'Travel',
          description: 'Premium travel rewards card with excellent redemption value'
        },
        {
          id: '2',
          name: 'Capital One Venture Rewards',
          issuer: 'Capital One',
          image: '',
          apr: '19.99% - 29.99%',
          rewards: '2x miles on all purchases',
          annualFee: '$95',
          signupBonus: '75,000 miles after spending $4,000 in first 3 months',
          category: 'Travel',
          description: 'Flexible travel rewards with no blackout dates'
        },
        {
          id: '3',
          name: 'American Express Gold Card',
          issuer: 'American Express',
          image: '',
          apr: '19.24% - 28.24%',
          rewards: '4x points on dining & groceries, 3x on flights',
          annualFee: '$250',
          signupBonus: '60,000 points after spending $4,000 in first 6 months',
          category: 'Dining',
          description: 'Premium dining and grocery rewards card'
        },
        {
          id: '4',
          name: 'Citi Double Cash',
          issuer: 'Citi',
          image: '',
          apr: '19.24% - 29.24%',
          rewards: '2% cash back (1% when you buy, 1% when you pay)',
          annualFee: '$0',
          signupBonus: '$200 after spending $1,500 in first 6 months',
          category: 'Cash Back',
          description: 'Simple, straightforward cash back with no annual fee'
        },
        {
          id: '5',
          name: 'Discover it Cash Back',
          issuer: 'Discover',
          image: '',
          apr: '17.24% - 28.24%',
          rewards: '5% rotating categories, 1% on all other purchases',
          annualFee: '$0',
          signupBonus: 'Cashback Match for first year',
          category: 'Cash Back',
          description: 'Rotating 5% categories with first-year bonus'
        },
        {
          id: '6',
          name: 'Wells Fargo Active Cash',
          issuer: 'Wells Fargo',
          image: '',
          apr: '20.24% - 29.99%',
          rewards: '2% unlimited cash back on all purchases',
          annualFee: '$0',
          signupBonus: '$200 after spending $1,000 in first 3 months',
          category: 'Cash Back',
          description: 'Unlimited 2% cash back with no annual fee'
        },
        {
          id: '7',
          name: 'Chase Freedom Unlimited',
          issuer: 'Chase',
          image: '',
          apr: '20.49% - 29.24%',
          rewards: '5% on travel through Chase, 3% on dining & drugstores, 1.5% on all other purchases',
          annualFee: '$0',
          signupBonus: '$200 after spending $500 in first 3 months',
          category: 'Cash Back',
          description: 'Flexible cash back with bonus categories'
        },
        {
          id: '8',
          name: 'American Express Blue Cash Preferred',
          issuer: 'American Express',
          image: '',
          apr: '19.24% - 29.24%',
          rewards: '6% on groceries, 6% on streaming, 3% on transit & gas',
          annualFee: '$95',
          signupBonus: '$350 after spending $3,000 in first 6 months',
          category: 'Groceries',
          description: 'High rewards on groceries and streaming services'
        },
        {
          id: '9',
          name: 'Capital One SavorOne',
          issuer: 'Capital One',
          image: '',
          apr: '19.99% - 29.99%',
          rewards: '3% on dining, entertainment & streaming, 5% on hotels & rental cars',
          annualFee: '$0',
          signupBonus: '$200 after spending $500 in first 3 months',
          category: 'Dining',
          description: 'No annual fee dining and entertainment rewards'
        },
        {
          id: '10',
          name: 'Bank of America Customized Cash Rewards',
          issuer: 'Bank of America',
          image: '',
          apr: '18.99% - 28.99%',
          rewards: '3% in your choice category, 2% at grocery stores & wholesale clubs',
          annualFee: '$0',
          signupBonus: '$200 after spending $1,000 in first 90 days',
          category: 'Cash Back',
          description: 'Customizable cash back categories'
        },
        {
          id: '11',
          name: 'Chase Ink Business Preferred',
          issuer: 'Chase',
          image: '',
          apr: '21.24% - 26.24%',
          rewards: '3x points on travel, shipping, internet, cable, phone, advertising',
          annualFee: '$95',
          signupBonus: '100,000 points after spending $8,000 in first 3 months',
          category: 'Business',
          description: 'Premium business rewards card'
        },
        {
          id: '12',
          name: 'Discover it Miles',
          issuer: 'Discover',
          image: '',
          apr: '17.24% - 28.24%',
          rewards: '1.5x miles on all purchases',
          annualFee: '$0',
          signupBonus: 'Miles Match for first year',
          category: 'Travel',
          description: 'Simple travel rewards with first-year bonus'
        }
      ];

  comparisonItems: CreditCard[] = [];

  ngOnInit(): void {
    this.activateRoute.queryParamMap.subscribe((params: any) => 
      this.loginID = params.params.category);
    
    if (this.loginID == 'guest') {
      this.account = 'hidden'
    }
  }

  toBrowsCards() {
    this.router.navigate(['/browseCards'])
  }

  logOut() {
    this.router.navigate(['/home'])
  }

  compare() {
    if (this.comparisonItems.length >= 2) {
      // Pass comparison data to the comparison page
      this.router.navigate(['/compare'], {
        queryParams: {
          cards: JSON.stringify(this.comparisonItems.map(card => card.id))
        }
      });
    }
  }

  onImageError(event: any) {
    event.target.style.display = 'none';
    event.target.parentElement.innerHTML = `
      <div class="card-placeholder">
        <div class="placeholder-icon">💳</div>
        <div class="placeholder-text">Card Image</div>
      </div>
    `;
  }

  viewDetails(card: CreditCard) {
    console.log('Viewing details for:', card.name);
    // You can implement detailed view functionality here
    alert(`Viewing details for ${card.name}\n\nAPR: ${card.apr}\nAnnual Fee: ${card.annualFee}\nRewards: ${card.rewards}\nSign-up Bonus: ${card.signupBonus}`);
  }

      addToCompare(card: CreditCard) {
        if (!this.comparisonItems.find(item => item.id === card.id)) {
          this.comparisonItems.push(card);
          // Visual feedback
          console.log(`Added ${card.name} to comparison`);
        } else {
          console.log(`${card.name} is already in comparison`);
        }
      }

  removeFromComparison(index: number) {
    this.comparisonItems.splice(index, 1);
  }

      clearComparison() {
        this.comparisonItems = [];
      }

      isInComparison(card: CreditCard): boolean {
        return this.comparisonItems.some(item => item.id === card.id);
      }

  selectedCredit = 'Zolve aspire';
  selectedCard(value: string): void {
    this.selectedCredit = value;
  }

  OnCheck() {
    this.check = "";
    this.uncheck = "";
    this.selectedcard = this.selectedCredit
    this.selectedItem = this.purchaseItem
  }

  purchaseItem = 'Airbnb'
  Onpurchase(value: string) {
    this.purchaseItem = value;
  }
}
  

