import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface CreditCard {
  name: string;
  issuer: string;
  category: string;
  rewards: string;
  annualFee: string;
  apr: string;
}

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent implements OnInit {
constructor(private router:Router,private activateRoute: ActivatedRoute){}

check="hidden";
uncheck="f1-pos"
selectedcard="Chase Sapphire Preferred";
selectedItem='Airbnb';
loginID='';
account='';

// Credit card data with rewards information
creditCards: CreditCard[] = [
  {
    name: 'Chase Sapphire Preferred',
    issuer: 'Chase',
    category: 'Travel',
    rewards: '2x points on travel & dining, 1x on all other purchases',
    annualFee: '$95',
    apr: '21.49% - 28.49%'
  },
  {
    name: 'Capital One Venture Rewards',
    issuer: 'Capital One',
    category: 'Travel',
    rewards: '2x miles on all purchases',
    annualFee: '$95',
    apr: '19.99% - 29.99%'
  },
  {
    name: 'American Express Gold Card',
    issuer: 'American Express',
    category: 'Dining',
    rewards: '4x points on dining & groceries, 3x on flights',
    annualFee: '$250',
    apr: '19.24% - 28.24%'
  },
  {
    name: 'Citi Double Cash',
    issuer: 'Citi',
    category: 'Cash Back',
    rewards: '2% cash back (1% when you buy, 1% when you pay)',
    annualFee: '$0',
    apr: '19.24% - 29.24%'
  },
  {
    name: 'Discover it Cash Back',
    issuer: 'Discover',
    category: 'Cash Back',
    rewards: '5% rotating categories, 1% on all other purchases',
    annualFee: '$0',
    apr: '17.24% - 28.24%'
  },
  {
    name: 'Wells Fargo Active Cash',
    issuer: 'Wells Fargo',
    category: 'Cash Back',
    rewards: '2% unlimited cash back on all purchases',
    annualFee: '$0',
    apr: '20.24% - 29.99%'
  },
  {
    name: 'Chase Freedom Unlimited',
    issuer: 'Chase',
    category: 'Cash Back',
    rewards: '5% on travel through Chase, 3% on dining & drugstores, 1.5% on all other purchases',
    annualFee: '$0',
    apr: '20.49% - 29.24%'
  },
  {
    name: 'American Express Blue Cash Preferred',
    issuer: 'American Express',
    category: 'Groceries',
    rewards: '6% on groceries, 6% on streaming, 3% on transit & gas',
    annualFee: '$95',
    apr: '19.24% - 29.24%'
  },
  {
    name: 'Capital One SavorOne',
    issuer: 'Capital One',
    category: 'Dining',
    rewards: '3% on dining, entertainment & streaming, 5% on hotels & rental cars',
    annualFee: '$0',
    apr: '19.99% - 29.99%'
  },
  {
    name: 'Bank of America Customized Cash Rewards',
    issuer: 'Bank of America',
    category: 'Cash Back',
    rewards: '3% in your choice category, 2% at grocery stores & wholesale clubs',
    annualFee: '$0',
    apr: '18.99% - 28.99%'
  },
  {
    name: 'Chase Ink Business Preferred',
    issuer: 'Chase',
    category: 'Business',
    rewards: '3x points on travel, shipping, internet, cable, phone, advertising',
    annualFee: '$95',
    apr: '21.24% - 26.24%'
  },
  {
    name: 'Discover it Miles',
    issuer: 'Discover',
    category: 'Travel',
    rewards: '1.5x miles on all purchases',
    annualFee: '$0',
    apr: '17.24% - 28.24%'
  }
];
ngOnInit(): void {
 this.activateRoute.queryParamMap.subscribe((params: any) => 
this.loginID=params.params.category);

if(this.loginID =='guest'){
   this.account='hidden'
}

}

 logOut(){
 this.router.navigate(['/home'])
 }
  toBrowsCards(){
    this.router.navigate(['/browseCards'])
  }

 selectedCredit = 'Chase Sapphire Preferred';
 selectedCard(value:string): void {
		this.selectedCredit = value;
	}

  OnCheck(){
    this.check="";
    this.uncheck="";
    this.selectedcard=this.selectedCredit
    this.selectedItem=this.purchaseItem
  }
purchaseItem='Airbnb'
  Onpurchase(value:string){
   this.purchaseItem=value;
  }

  // Get rewards percentage for selected card and expense
  getRewardsPercentage(): string {
    const selectedCardData = this.creditCards.find(card => card.name === this.selectedCredit);
    if (!selectedCardData) return '0%';

    // Simple rewards calculation based on card category and expense type
    const expense = this.purchaseItem.toLowerCase();
    
    if (selectedCardData.category === 'Travel' && (expense === 'airbnb' || expense === 'lyft' || expense === 'uber')) {
      return '2%';
    } else if (selectedCardData.category === 'Dining' && (expense === 'starbucks')) {
      return '4%';
    } else if (selectedCardData.category === 'Cash Back') {
      return '2%';
    } else if (selectedCardData.category === 'Groceries' && (expense === 'walmart' || expense === 'target')) {
      return '6%';
    } else if (selectedCardData.category === 'Business') {
      return '3%';
    }
    
    return '1%'; // Default cashback
  }

}
