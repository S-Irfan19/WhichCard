#!/bin/bash

# Create realistic credit card images using ImageMagick
cd /Users/shaikirfan/Desktop/WhichCard1/src/assets/images/cards

# Chase Sapphire Preferred - Blue gradient card
convert -size 400x250 xc:none \
  -fill "linear-gradient(135deg, #1e3a8a, #3b82f6)" \
  -draw "roundrectangle 0,0 400,250 15,15" \
  -fill white -pointsize 24 -font Arial-Bold -gravity NorthWest -annotate +20+20 "Chase Sapphire Preferred" \
  -fill white -pointsize 14 -gravity NorthWest -annotate +20+50 "Travel Rewards" \
  -fill white -pointsize 16 -gravity SouthWest -annotate +20+30 "**** **** **** 1234" \
  -fill white -pointsize 12 -gravity SouthWest -annotate +20+10 "VALID THRU 12/28" \
  -fill white -pointsize 12 -gravity SouthEast -annotate +20+10 "JOHN DOE" \
  chase-sapphire-preferred-real.jpg

# Capital One Venture - Red gradient card  
convert -size 400x250 xc:none \
  -fill "linear-gradient(135deg, #dc2626, #f87171)" \
  -draw "roundrectangle 0,0 400,250 15,15" \
  -fill white -pointsize 24 -font Arial-Bold -gravity NorthWest -annotate +20+20 "Capital One Venture" \
  -fill white -pointsize 14 -gravity NorthWest -annotate +20+50 "Travel Rewards" \
  -fill white -pointsize 16 -gravity SouthWest -annotate +20+30 "**** **** **** 5678" \
  -fill white -pointsize 12 -gravity SouthWest -annotate +20+10 "VALID THRU 12/28" \
  -fill white -pointsize 12 -gravity SouthEast -annotate +20+10 "JANE SMITH" \
  capital-one-venture-real.jpg

# American Express Gold - Gold gradient card
convert -size 400x250 xc:none \
  -fill "linear-gradient(135deg, #1f2937, #4b5563)" \
  -draw "roundrectangle 0,0 400,250 15,15" \
  -fill white -pointsize 24 -font Arial-Bold -gravity NorthWest -annotate +20+20 "American Express Gold" \
  -fill white -pointsize 14 -gravity NorthWest -annotate +20+50 "Dining & Groceries" \
  -fill white -pointsize 16 -gravity SouthWest -annotate +20+30 "**** **** **** 9012" \
  -fill white -pointsize 12 -gravity SouthWest -annotate +20+10 "VALID THRU 12/28" \
  -fill white -pointsize 12 -gravity SouthEast -annotate +20+10 "MIKE JOHNSON" \
  amex-gold-card-real.jpg

# Citi Double Cash - Green gradient card
convert -size 400x250 xc:none \
  -fill "linear-gradient(135deg, #059669, #10b981)" \
  -draw "roundrectangle 0,0 400,250 15,15" \
  -fill white -pointsize 24 -font Arial-Bold -gravity NorthWest -annotate +20+20 "Citi Double Cash" \
  -fill white -pointsize 14 -gravity NorthWest -annotate +20+50 "Cash Back Card" \
  -fill white -pointsize 16 -gravity SouthWest -annotate +20+30 "**** **** **** 3456" \
  -fill white -pointsize 12 -gravity SouthWest -annotate +20+10 "VALID THRU 12/28" \
  -fill white -pointsize 12 -gravity SouthEast -annotate +20+10 "SARAH WILSON" \
  citi-double-cash-real.jpg

# Discover Cash Back - Purple gradient card
convert -size 400x250 xc:none \
  -fill "linear-gradient(135deg, #7c3aed, #a855f7)" \
  -draw "roundrectangle 0,0 400,250 15,15" \
  -fill white -pointsize 24 -font Arial-Bold -gravity NorthWest -annotate +20+20 "Discover it Cash Back" \
  -fill white -pointsize 14 -gravity NorthWest -annotate +20+50 "Rotating Categories" \
  -fill white -pointsize 16 -gravity SouthWest -annotate +20+30 "**** **** **** 7890" \
  -fill white -pointsize 12 -gravity SouthWest -annotate +20+10 "VALID THRU 12/28" \
  -fill white -pointsize 12 -gravity SouthEast -annotate +20+10 "DAVID BROWN" \
  discover-cash-back-real.jpg

# Wells Fargo Active Cash - Orange gradient card
convert -size 400x250 xc:none \
  -fill "linear-gradient(135deg, #dc2626, #f87171)" \
  -draw "roundrectangle 0,0 400,250 15,15" \
  -fill white -pointsize 24 -font Arial-Bold -gravity NorthWest -annotate +20+20 "Wells Fargo Active Cash" \
  -fill white -pointsize 14 -gravity NorthWest -annotate +20+50 "Unlimited Cash Back" \
  -fill white -pointsize 16 -gravity SouthWest -annotate +20+30 "**** **** **** 2468" \
  -fill white -pointsize 12 -gravity SouthWest -annotate +20+10 "VALID THRU 12/28" \
  -fill white -pointsize 12 -gravity SouthEast -annotate +20+10 "LISA GARCIA" \
  wells-fargo-active-cash-real.jpg

echo "Credit card images created successfully!"
