def main():
    months = {
        "January": "01", "February": "02", "March": "03", "April": "04",
        "May": "05", "June": "06", "July": "07", "August": "08",
        "September": "09", "October": "10", "November": "11", "December": "12"
    }

    while True:
        try:
            date = input("Date: ").strip()

            
            if "/" in date:
                month, day, year = date.split("/")
                month = int(month)
                day = int(day)
                year = int(year)
           
            elif "," in date:
                month_name, rest = date.split(" ", 1)
                day, year = rest.replace(",", "").split()
                month = months[month_name]
                day = int(day)
                year = int(year)
            else:
                raise ValueError

           
            if isinstance(month, str):
                mm = month
            else:
                if not 1 <= month <= 12:
                    raise ValueError
                mm = f"{month:02}"

            if not 1 <= day <= 31:
                raise ValueError

            print(f"{year}-{mm}-{day:02}")
            break

        except (ValueError, KeyError):
            continue

if __name__ == "__main__":
    main()
